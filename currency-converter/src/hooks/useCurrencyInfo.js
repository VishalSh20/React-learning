import {useState,useEffect } from "react";

const useCurrencyInfo = (currency) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_Wrj3XvST9hohry6KIdKj2EJ8BBTuK6g5X3kjnMiz')
        .then((res)=>res.json())
        .then((res)=>(setData(res.data)))
    },[])
    return data;
}

export default useCurrencyInfo;