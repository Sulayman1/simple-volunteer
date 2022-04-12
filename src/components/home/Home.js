import React, { useState } from 'react';

const Home = () => {
    const [count, setCount] = useState(0);
    const number = 56;

    const increaseCount = () => {
        setCount(count + 1);
    }
    return (
        <div>
            my number: {number}
            <br />
            <button onClick={increaseCount}>Click Me</button>
            <br />
            {count}
            <p>dubble count{count * 2} </p>
        </div>
    );
};

export default Home;