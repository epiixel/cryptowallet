import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../config/';

const useCart = Obj => {
    try{

        const [Object, setObject] = useState(Obj);
        const [Response, setResponse] = useState([]);
        async function load(){
            const { data } = await axios.post(`${db.server}${Object?.URL}`, Object?.PARAMS);
            setResponse(data)
        }
        
        useEffect(() => {
            load();
        }, [Object]) 
        
        return [ Response, setObject ];
    }catch(err){
        return [ null, null ];
    }
}
export default useCart;