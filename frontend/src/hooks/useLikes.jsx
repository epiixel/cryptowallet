import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
import { isEmpty } from '../lib';
import { GLOBAL } from '../redux';

const useLikes = () => {
const [Object, setObject] = useState({});
const [Response, setResponse] = useState([]);
var arr = {
    user: Object?.user,
    product: Object?.product
};
async function load(){
    if(isEmpty(arr?.user) || isEmpty(arr?.product)) return;
        const { data } = await axios.post(`${db.server}/user/likes/`, arr);
        setResponse(data)
}

useEffect(() => {
    load();
}, [Object]) 

return [ Response, setObject ];
}
export default useLikes;