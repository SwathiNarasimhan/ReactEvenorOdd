import React, { useState } from "react";

const EvenOrOddFun = () =>{

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            {count % 2 === 0 ?
            <div className="even-wrap">
                <p>Increament Number {count} is a Even Number</p>
            </div> :
            <div className="odd-wrap">
                <p>Increament Number {count} is a Odd Number</p>
            </div>}
        </div>
        
    )
}

export default EvenOrOddFun;