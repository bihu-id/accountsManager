files=(AccountInterface.sol BaseData.sol BaseEvent.sol Data.sol Erc20.sol TokenInterface.sol LogicProxy.sol)

from=${PWD}/contracts/
to=${PWD}/../accountsManager-interface/contracts/
for file in ${files[@]}
do
    cp ${from}${file} ${to}
    echo "cp ${from}${file} ${to}"
done