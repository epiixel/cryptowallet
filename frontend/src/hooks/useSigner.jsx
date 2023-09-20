import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
// import { ConnectWallet, useSigner, useAddress, useWallet, useBalance, useContract } from "@thirdweb-dev/react";


const useSigner = () => {
const [data, setData] = useState([]);
useEffect(() => {
    async function load(){
        // const res = await MainProvider();
        // setData(res);
    }
    load();
}, []) 

return data;
}
export default useSigner;