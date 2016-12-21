import "Erc20.sol";
import "BaseData.sol";

contract TokenInterface is BaseLogic,Erc20 {

     enum Status{

        normal,
        freeze

     }

     struct Option{

        // operaton of this token must called by coreContract
        address m_coreContract;
        // core can override transfer value from any address to any address
        address m_core;
        //symbol of taken;
        bytes32 m_symbol;

        //id of token, the low 48 is id ,and 48-64 is type;
        uint m_id;
        //the creator/owner of token
        address m_issuer;
        // max supply of token ,u256
        uint m_maxSupply;
        //
        uint m_precision;

        uint m_currentSupply;

        //register date
        uint m_registerTime;

        // end time of this token
        uint  m_closingTime;

        string m_description;

        //hash of contract
        uint m_hash;


        Status m_status;

    }

    Option m_option;

    mapping (address => uint256) m_balances;
    mapping (address => mapping (address => uint256)) m_allowed;

    mapping (address=>uint) m_freezeLists;

    /// @notice 增发更多的资产,由资产的issuer 调用
    /// @param _amounts 增发数量
    function issueMore(uint _amounts)returns (bool success);

    /// @notice 销毁由issuer 持有的资产 只能由issuer调用
    /// @param _amounts 销毁数量
    function destroy(uint _amounts)returns (bool success);

    /// @notice Override send `_amount` tokens to `_to` from `_from`
    /// @param _from The address of the sender
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function forceTransfer(address _from,address _to,uint _amount)returns (bool success);

    /// @notice 冻结账户 _account 只有 tokenManager 能调用
    /// @param _account ..
    function freeze(address _account)returns (bool success);

    /// @notice 解冻账户 _account 只有 tokenManager 能调用
    /// @param _account ..
    function unfreeze(address _account)returns (bool success);

    /// @notice 冻结整个资产 只有 tokenManager 能调用
    function freezeToken()returns (bool success);

    /// @notice 解冻整个资产 只有 tokenManager 能调用
    function unfreezeToken()returns (bool success);

    /// @return the summary of this token
    function summary()constant returns(
        uint _id,                           //编号
        address _issuer,                    //拥有者
        bytes32 _symbol,                    //字符代码
        uint _maxSupply,                    //最大供应量
        uint _precision,                    //精度
        uint _currentSupply,                //当前供应量
        string _description,                //描述
        uint _registerTime,                 //注册时间
        uint _closingTime,                  //过期时间
        address _coreContract,              //资产合约地址
        uint _hash,                         //资产合同HASH
        Status _status                      //资产状态 0:正常,1:冻结
    );

    /// @notice 获得账户 _account 的状态
    /// @param _account ..
    /// @return _status 账户状态 0:正常,1:冻结
    function accountStatus(address _account)constant returns (Status _status);

    event TokenCreate(
        address _issuer,
        bytes32 _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract);

    event ForceTransfer(uint _id,address _from, address _to, uint _amount);

    event IssueMore(address _issuer,uint _id,uint _amounts);

    event Destroy(address _issuer,uint _id,uint _amounts);
}

contract Token is TokenInterface {

    /*
    modifier notEnd() {if(now < m_option.m_closingTime) throw; _;}
    modifier ifCoreL() {if(msg.sender != m_option.m_core)throw; _;}
    modifier notFreeze(){if(m_freezeLists[msg.sender])throw; _;}
    modifier normal(){if(m_option.m_status!=Status.normal)throw; _;}
    */

    function Token()BaseData(uint(msg.sender)){}

    //check token if end
    function ifEnd() internal {if(now < m_option.m_closingTime)          {Err(60040001);throw;}  }
    //check if the operation is called from core
    function ifCoreL() internal {if(msg.sender != m_option.m_core)       {Err(10000000);throw;}  }

    function ifIssuer()internal {if(msg.sender != m_option.m_issuer)     {Err(60040004);throw;}  }

    function ifFreeze()internal {if(m_freezeLists[msg.sender]==1)        {Err(60040002);throw;}  }

    function normal()internal {if(m_option.m_status!=Status.normal)      {Err(60040003);throw;}  }
    //force transfer by core

    function init(
        address _issuer,
        bytes32 _symbol,
        uint _id,
        uint _maxSupply,
        uint _precision,
        uint _currentSupply,
        uint  _closingTime,
        string _description,
        uint _hash,
        address _coreContract
        )returns (bool success)
        {
            beforeInit();
            //if(now<_closingTime) throw;
            m_option.m_issuer=          _issuer;
            m_option.m_symbol=          _symbol;
            m_option.m_id=              _id;
            m_option.m_maxSupply=       _maxSupply;
            m_option.m_precision=       _precision;
            m_option.m_currentSupply=   _currentSupply;
            m_option.m_description=     _description;
            m_option.m_closingTime=     _closingTime;
            m_option.m_coreContract=    _coreContract;
            m_option.m_registerTime=    now;
            m_option.m_hash=            _hash;
            m_option.m_status=          Status.normal;

            m_balances[_issuer]=_currentSupply;

            uint[] memory t_res=new uint[](1);
            t_res[0]=1;

            //afterInit(t_res);
            inited=1;
            return true;
        }

    function balanceOf(address _owner) constant returns (uint256 balance) {

        return m_balances[_owner];

    }

    function totalSupply() constant returns (uint supply){

        return m_option.m_currentSupply;

    }

    function allowance(address owner, address spender) constant returns (uint _allowance){

        return  m_allowed[owner][spender];

    }

    function transfer(address _to, uint256 _amount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        if (m_balances[msg.sender] >= _amount && _amount > 0) {
            m_balances[msg.sender] -= _amount;
            m_balances[_to] += _amount;
            Transfer(msg.sender, _to, _amount);
            return true;
        } else {
           return false;
        }

    }

    function issueMore(uint _amounts)returns (bool success){

        ifIssuer();
        //check overflow
        if(m_option.m_maxSupply-m_option.m_currentSupply<_amounts)           {Err(60041001);throw;}
        m_option.m_currentSupply=m_option.m_currentSupply+_amounts;
        m_balances[msg.sender]=m_balances[msg.sender]+_amounts;
        IssueMore(m_option.m_issuer,m_option.m_id,_amounts);
        return true;

    }

    function destroy(uint _amounts)returns (bool success){

        ifIssuer();
        if(m_balances[msg.sender]<_amounts)                         {Err(60041002);throw;}
        m_option.m_currentSupply-=_amounts;
        m_balances[msg.sender]=m_balances[msg.sender]-_amounts;
        Destroy(m_option.m_issuer,m_option.m_id,_amounts);
        return true;

    }

    function forceTransfer(address _from,address _to,uint _amount)returns (bool success){

        ifCoreL();
        ifEnd();
        normal();
        if (m_balances[_from] >= _amount && _amount > 0) {
            m_balances[_from] -= _amount;
            m_balances[_to] += _amount;
            ForceTransfer(m_option.m_id,_from, _to, _amount);
            return true;
        } else {
           return false;
        }
    }

    function transferFrom(address _from, address _to, uint256 _amount) returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        if (m_balances[_from] >= _amount
            && m_allowed[_from][msg.sender] >= _amount
            && _amount > 0) {
            m_balances[_from] -= _amount;
            m_allowed[_from][msg.sender] -= _amount;
            m_balances[_to] += _amount;
            Transfer(_from, _to, _amount);
            return true;
        } else {
            return false;
        }
    }

    function approve(address _spender, uint256 _amount)  returns (bool success) {

        ifEnd();
        ifFreeze();
        normal();
        m_allowed[msg.sender][_spender] = _amount;
        Approval(msg.sender, _spender, _amount);
        return true;

    }

    function freeze(address _account)returns (bool success){

        ifCoreL();
        m_freezeLists[_account]=1;//Status.freeze=1
        return true;

    }

    function unfreeze(address _account)returns (bool success){

        ifCoreL();
        m_freezeLists[_account]=0;//Status.normal=0
        return true;

    }

    function freezeToken()returns (bool success){

        ifCoreL();
        m_option.m_status=Status.freeze;
        return true;

    }

    function unfreezeToken()returns (bool success){

        ifCoreL();
        m_option.m_status=Status.normal;
        return true;

    }

    function summary()constant returns(
        uint        _id,
        address     _issuer,
        bytes32     _symbol,
        uint        _maxSupply,
        uint        _precision,
        uint        _currentSupply,
        string      _description,
        uint        _registerTime,
        uint        _closingTime,
        address     _coreContract,
        uint        _hash,
        Status      _status
    ){
        _id=                m_option.m_id;
        _issuer=            m_option.m_issuer;
        _symbol=            m_option.m_symbol;
        _maxSupply=         m_option.m_maxSupply;
        _precision=         m_option.m_precision;
        _currentSupply=     m_option.m_currentSupply;
        _description=       m_option.m_description;
        _registerTime=      m_option.m_registerTime;
        _closingTime=       m_option.m_closingTime;
        _coreContract=      m_option.m_coreContract;
        _hash=              m_option.m_hash;
        _status=            m_option.m_status;
        return;

    }

    function accountStatus(address _account)constant returns (Status _status){

        return Status(m_freezeLists[_account]);

    }
}

