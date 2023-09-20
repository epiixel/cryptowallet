import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
import { MainProvider, SignContract } from '../web3/';
import { Networks } from '../web3/networks';
import { Tokens, Contracts } from '../config/';
import { FormatNumber, short } from '../lib/';
import { TbBrandCashapp } from 'react-icons/tb';
import { ethers, utils } from 'ethers';
import { GLOBAL, setIsLoading, setReload, setMessage } from '../redux/';
import { useDispatch } from 'react-redux';

const useFetchPrice = (url, object={}) => {
    const [price, setPrice] = useState(0)
    useEffect(() => {
    async function load(){
    const Provider = await MainProvider();

    const NATIVE = SignContract(Tokens?.Native.Address, Tokens?.Native.ABI, Provider);
    const TOKEN = SignContract(Tokens?.Token.Address, Tokens?.Token.ABI, Provider);
    const USD = SignContract(Tokens?.USD.Address, Tokens?.USD.ABI, Provider);
    
    const ROUTER = SignContract(Contracts?.ROUTER?.address, Contracts?.ROUTER?.abi, Provider);

    const Price0 = await ROUTER.getAmountsOut(utils.parseUnits("1", 18), [TOKEN.address, NATIVE.address])
    const Price1 = await ROUTER.getAmountsOut(Price0[1], [NATIVE.address, USD.address])
    setPrice(utils.formatUnits(Price1[1], 18))
    }
    load();
     
}, [])    
    // setTokenPrice(utils.formatUnits(Price1[1], 18));
// const [data, setData] = useState([]);
// useEffect(() => {
//     async function load(){
//         const res = await axios.post(url, object);
//         setData(res.data)
//     }
//     load();
// }, [url]) 

return price;
}
export default useFetchPrice;