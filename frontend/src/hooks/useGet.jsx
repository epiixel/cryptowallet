import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';

const useGet = (url, object={}) => {
const [data, setData] = useState([]);
useEffect(() => {
    async function load(){
        const res = await axios.get(url, {object});
        setData(res.data)
    }
    load();
}, [url]) 

return data;
}
export default useGet;