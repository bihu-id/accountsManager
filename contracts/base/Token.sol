import "./Erc20.sol";
import "./BaseData.sol";
import "../interface/TokenInterface.sol";
contract Token is BaseLogic,Erc20,TokenInterface {

    /*
    modifier notEnd() {if(now < m_option.m_closingTime) throw; _;}
    modifier ifCore() {if(msg.sender != m_option.m_coreContract)throw; _;}
    modifier notFreeze(){if(m_freezeLists[msg.sender])throw; _;}
    modifier normal(){if(m_option.m_status!=Status.normal)throw; _;}
    */

    function Token()BaseData(uint(msg.sender)){}

    //check token if end
    function ifEnd() internal {if(now < m_option.m_closingTime)          {throwErrEvent(60040001);  }}
    //check if the operation is called from core
    function ifCore() internal {if(msg.sender != m_option.m_coreContract)       {throwErrEvent(10000000);  }}

    function ifIssuer()internal {if(msg.sender != m_option.m_issuer)     {throwErrEvent(60040004);  }}

    function ifFreeze()internal {if(m_freezeLists[msg.sender]==1)        {throwErrEvent(60040002);  }}

    function normal()internal {if(m_option.m_status!=Status.normal)      {throwErrEvent(60040003);  }}
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
            t_res[0]=uint(_issuer);

            afterInit(t_res);
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
           throwErrEvent(60040005);
           return false;
        }

    }

    function transferOrigin(address _to,uint _amount)returns (bool success){

        ifEnd();
        ifFreeze();
        normal();
        if (m_balances[tx.origin] >= _amount && _amount > 0) {
            m_balances[tx.origin] -= _amount;
            m_balances[_to] += _amount;
            Transfer(tx.origin, _to, _amount);
            return true;
        } else {
           throwErrEvent(60040005);
           return false;
        }
    }

    function issueMore(uint _amounts)returns (bool success){

        ifIssuer();
        //check overflow
        if(m_option.m_maxSupply-m_option.m_currentSupply<_amounts)           {throwErrEvent(60041001);}
        m_option.m_currentSupply=m_option.m_currentSupply+_amounts;
        m_balances[msg.sender]=m_balances[msg.sender]+_amounts;
        IssueMore(m_option.m_issuer,m_option.m_id,_amounts);
        return true;

    }

    function destroy(uint _amounts)returns (bool success){

        ifIssuer();
        if(m_balances[msg.sender]<_amounts)                         {throwErrEvent(60041002);}
        m_option.m_currentSupply-=_amounts;
        m_balances[msg.sender]=m_balances[msg.sender]-_amounts;
        Destroy(m_option.m_issuer,m_option.m_id,_amounts);
        return true;

    }

    function forceTransfer(address _from,address _to,uint _amount)returns (bool success){

        ifCore();
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

        ifCore();
        m_freezeLists[_account]=1;//Status.freeze=1
        return true;

    }

    function unfreeze(address _account)returns (bool success){

        ifCore();
        m_freezeLists[_account]=0;//Status.normal=0
        return true;

    }

    function freezeToken()returns (bool success){

        ifCore();
        m_option.m_status=Status.freeze;
        return true;

    }

    function unfreezeToken()returns (bool success){

        ifCore();
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
    // seperate logic
    function changeLogicProxy(uint _newAddress){
        if(uint(msg.sender)!=m_initor)   {throwErrEvent(60040006);}
        {
            porxy=_newAddress;
        }
    }

    function getProxy()constant returns(address _proxy){return address(porxy);}

    function getInitor()constant returns(address _proxy){return address(m_initor);}

}

