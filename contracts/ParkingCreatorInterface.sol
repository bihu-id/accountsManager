contract ParkingCreatorInterface{

    /// @notice 创建停车场
    /// @param _noInSystem              停车场编号
    /// @param _system                  停车场系统地址,比如:停车王
    /// @param _name                    停车场名字
    /// @param _spaceAmount             停车位总数
    /// @param _manager                 管理员地址, tokenManager 地址
    /// @param _closingTime             结束时间
    /// @param _hash                    法律文件hash
    /// @param _logicProxy              逻辑代理地址
    /// @return _success                成功true ,失败false
    function createParking(uint _noInSystem,address _system,string _name,uint _spaceAmount,address _manager ,uint _closingTime,uint _hash,address _logicProxy)returns (bool _success);

    /// @notice 创建停车场资产地址
    /// @param _parkingAddress 停车场资产地址
    event CreateParkingData(address _parkingAddress);
}