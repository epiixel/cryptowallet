import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';
import { isEmpty } from '../lib';
import { GLOBAL } from '../redux';

const useCart = () => {
var session = GLOBAL('session')
const [Object, setObject] = useState({});
const [Response, setResponse] = useState([]);
var arr = {
    uuid: Object?.uuid,
    user: Object?.user,
    wallet: Object?.user,
    product: Object?.product,
    quantity: Object?.quantity,
    connected: !isEmpty(Object?.user) ? true : false
};
async function load(){
    if(Object.add === true){
        const { data } = await axios.post(`${db.server}/add/cart/`, arr);
        setResponse(data)
    }else if(Object.add === false){
        const { data } = await axios.post(`${db.server}/remove/cart/`, arr);
        setResponse(data)
    }
}

useEffect(() => {
    load();
}, [Object]) 

return [ Response, setObject ];
}
export default useCart;