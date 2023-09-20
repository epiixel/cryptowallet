import { utils } from 'ethers';
import React, { useState, useEffect } from 'react';
import { Contracts, Tokens } from '../config';
import { MainProvider, SignContract } from '../web3';

const useUserBalance = obj => {
    const [balance, setBalance] = useState(0)
    const [reload, setReload] = useState();
    var userAddress = obj?.address;
    var tokenAddress = obj?.token;
    useEffect(() => {
        async function load(){
            const Provider = await MainProvider();
            const Contract = SignContract(tokenAddress, Contracts?.ERC20?.abi, Provider);
            var UserBalance;
            if(Tokens?.Native?.Address.includes(tokenAddress)){
                UserBalance = await Provider.getBalance(userAddress);
            }else{
                UserBalance = await Contract.balanceOf(userAddress);
            }
            setBalance(utils.formatUnits(UserBalance, 18))
        }
        load()
    }, [reload])

    return [balance, setReload];

}

export default useUserBalance;