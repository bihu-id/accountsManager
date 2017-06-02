// Token standard API
// https://github.com/ethereum/EIPs/issues/20
contract ERC20Constant {

    function totalSupply() constant returns (uint supply);

    /// @param _owner The address from which the balance will be retrieved
    /// @return The balance
    function balanceOf(address _owner) constant returns (uint256 balance);
    function allowance(address owner, address spender) constant returns (uint _allowance);
}
contract ERC20Stateful {

    /// @notice Send `_amount` tokens to `_to`
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function transfer(address _to, uint256 _amount) returns (bool success);

    /// @notice Send `_amount` tokens to `_to` from `_from` on the condition it
    /// is approved by `_from`
    /// @param _from The address of the origin of the transfer
    /// @param _to The address of the recipient
    /// @param _amount The amount of tokens to be transferred
    /// @return Whether the transfer was successful or not
    function transferFrom(address _from, address _to, uint256 _amount) returns (bool success);

    /// @notice `msg.sender` approves `_spender` to spend `_amount` tokens on
    /// its behalf
    /// @param _spender The address of the account able to transfer the tokens
    /// @param _amount The amount of tokens to be approved for transfer
    /// @return Whether the approval was successful or not
    function approve(address _spender, uint256 _amount) returns (bool success);
}
contract ERC20Events {
    event Transfer(address  from, address  to, uint value);
    event Approval( address  owner, address spender, uint value);
}
contract Erc20 is ERC20Constant, ERC20Stateful, ERC20Events {}