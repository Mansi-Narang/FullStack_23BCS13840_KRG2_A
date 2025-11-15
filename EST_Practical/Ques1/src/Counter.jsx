import { useState } from 'react'

function Counter() {
    const [cnt, setCnt] = useState(0);

    const handleIncrement = () => {
        setCnt(cnt + 1);
    }

    const handleDecrement = () =>{
        setCnt(cnt - 1);
    }

    const resetCounter = () => {
        setCnt(0);
    }

    return ( 
        <>
            <h2>{cnt}</h2>
            <button className = "add" onClick={handleIncrement}>Increment</button>
            <button className = "dec" onClick={handleDecrement}>Decrement</button>
            <button className = "reset" onClick={resetCounter}>Reset</button> 
        </>
     );
}

export default Counter;