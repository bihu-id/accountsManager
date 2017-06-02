//Interface of base special token
contract BaseSToken{

    //when register token on tokenManager , tokenManager would give a new id to this token
    //only can called by core
    function setId(uint _newId);
    function setRelatedToken(address _relatedToken);

    event SetId(uint _newId);

}