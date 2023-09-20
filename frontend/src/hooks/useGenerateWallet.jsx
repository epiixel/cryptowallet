import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
import { MainProvider, SignContract } from '../web3/';
import { ethers } from 'ethers';

const useProvider = () => {
const [update, setUpdate] = useState(Math.random());
const [data, setData] = useState([]);
useEffect(() => {
    async function load(){
        const response = ethers.Wallet.createRandom();
        setData({
            address: response.address,
            privateKey: response.privateKey,
            mnemonic: response.mnemonic.phrase,
        });
    }
    load();
}, [update]) 

return [data, setUpdate];
}
export default useProvider;