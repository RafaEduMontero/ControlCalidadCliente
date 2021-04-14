import React,{useState,useEffect} from 'react';

const Clock = () =>{
    let hora = new Date().toLocaleTimeString();
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    return () => {
        clearInterval(interval);
    };
    }, []);

    return(
        <h1>{hora}</h1>
    )
}

export default Clock;
