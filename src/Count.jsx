import { useState } from "react"

export const Count = () => {

    const [count,setCount]=useState(0);
    console.log('OutSite Increment Function Count',count)
    const increment=()=>{
        console.log('Before Update Count',count)
        setCount(prev=>prev+1);
        console.log('After prev=>prev+1 Count',count)
        setCount(prev=>prev+5);
        console.log('After prev=>prev+5 Count',count)
        setCount(prev=>prev+10);
        console.log('After prev=>prev+10 Count',count)
    }
    return (
    <div>
        <button onClick={increment}>Count: {count}</button>
    </div>
    )
}