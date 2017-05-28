contract ParkingCreator{

    /// @notice 创建停车场
    /// @param _no 停车场编号
    /// @param _system 停车场系统地址,比如:停车王
    /// @param _name 停车场名字
    /// @param m_spaceAmount 停车位总数
    /// @param _manager 管理员地址, tokenManager 地址
    /// @param _systemManager 停车场名字
    /// @param _closingTime 中止时间
    /// @param _logicProxy 逻辑代理地址
    /// @param _hash 法律文件hash
    function createParking(uint _no,address _system,string _name,uint m_spaceAmount,address _manager ,uint _closingTime,uint _hash,address _logicProxy);

    /// @notice 创建停车场资产地址
    /// @param _parkingAddress 停车场资产地址
    event CreateParkingData(address _parkingAddress);
}