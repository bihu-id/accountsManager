contract Error{

    event Err(uint _no);
    //0:权限错误
    //1:输入格式错误
    //2:调用其他合约返回失败
    //3:余额不足
    //4:

    //普通错误:

    //10000000:  合约修改权限不足
    //10000001:  数据合约已经被初始化,不能再次初始化
    //10000002:  交易发送者不是合约的core
    //10000003:  交易发送者不是合约的owner
    //10000004:  合约已经被初始化
    //10000005:  caller没有初始化权限


    //11000001:  重置Key 角色不存在
    //11000002:  批准重置账户 角色输入错误
    //11000003:  批准重置账户 KEY输入错误
    //11000004:  尝试批准一个已经批准或拒绝的操作
    //11000005:  尝试拒绝一个已经批准或拒绝的操作
    //11000006:  批准操作账户输入错误

    //12000001:  manager合约 调用执行合约 执行过程中发生错误

    //Xindi管理合约错误,合约编号:001
    //60011001:  重置账户输入,拥有者数不等于权重数
    //60011002:  设置错误的用户实名等级 _level>=100
    //60011002:  设置错误的fun编号

    //账户逻辑合约错误,合约编号:002
    //60020001:  账户冻结状态
    //60020002:  交易还没被TxManager批准
    //60021001:  账户权重输入错误，权重小于阀值
    //60021002:  账户拥有者数和权重数不符
    //60021003:  尝试取消一个非CA用户的CA权限
    //60022001:  初始化账户返回错误

    //资产管理合约错误,合约编号:003
    //60030001:  caller 不是accountManager管理的账户
    //60030002:  无权限修改"可创建资产账户表"
    //60030003:  无权限重置KEYS

    //60031001:  创建资产有效期错误
    //60031002:  创建资产ID错误
    //60031003:  创建资产代号错误
    //60031004:  创建资产精度错误
    //60031005:  创建资产总量错误
    //60031006:  创建资产当前总量错误
    //60031007:  重置Key 角色不存在
    //60031008:  批准重置账户 角色输入错误
    //60031009:  批准重置账户 KEY输入错误

    //60032001:  创建资产失败,地址是空
    //60032002:  资产初始化失败,

    //60033001:  尝试批准一个已经批准的状态

    //资产合约错误,合约编号:004

    //60040001:  资产已经过期
    //60040002:  账户的本资产被冻结
    //60040003:  资产被冻结
    //60040004:  只有资产拥有者才可以增发资产。

    //60041001:  资产总量大于最大许可总量
    //60041002:  issuer没有持有销毁数量的资产。

    //账户管理合约错误 合约编号005
    //60050001:  caller不是 创建账户 地址
    //60050002:  caller不是Xindi账户


}