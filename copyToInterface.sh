files=(AccountInterface.sol BaseData.sol BaseEvent.sol Data.sol Erc20.sol TokenInterface.sol LogicProxy.sol BaseAppInterface.sol TokenManagerInterface.sol AccountCreatorInterface.sol DividendTokenInterface.sol BeanInterface.sol
ParkingCreatorInterface.sol
ParkingInterface.sol)

from=${PWD}/contracts/
to=${PWD}/../accountsManager-interface/contracts/
for file in ${files[@]}
do
    cp ${from}${file} ${to}
    echo "cp ${from}${file} ${to}"
done