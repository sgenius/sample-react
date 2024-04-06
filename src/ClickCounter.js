import React, { useState } from 'react';

const ClickCounter = () => {
    const [counter, setCounter] = useState(0);
    
    const clickHandler = () => {
        setCounter((oldValue) => {
            return oldValue + 1;
        });
    }

    return (
        <div>
            <p>Clicks: {counter}</p>
            <button onClick={clickHandler}>Click me</button>
        </div>
    );
}

export default ClickCounter;