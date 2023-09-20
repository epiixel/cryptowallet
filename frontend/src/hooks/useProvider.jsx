import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
import { MainProvider, SignContract } from '../web3/';

const useProvider = () => {
const [data, setData] = useState([]);
useEffect(() => {
    async function load(){
        const res = await MainProvider();
        setData(res);
    }
    load();
}, []) 

return data;
}
export default useProvider;