import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
import { useAddress } from '@thirdweb-dev/react';

const useFetch = (url, object={}) => {
const address = useAddress();
const [data, setData] = useState([]);
useEffect(() => {
    async function load(){
        const res = await axios.post(url, object);
        setData(res.data)
    }
    load();
}, [url, address]) 

return data;
}
export default useFetch;