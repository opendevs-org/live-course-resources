// 💡 useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
// The fundamental idea with useMemo is that it allows us to “remember” a computed value between renders.
// useMemo() is a built-in React hook that accepts 2 arguments — a function compute that computes a result and the depedencies array:


import React, { useState, useMemo } from 'react'

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    // const isEven = () => {
    //     let i = 0;
    //     while (i < 2000000000) i++;
    //     console.log('Re-Calculating')
    //     return counterOne % 2 === 0;
    // }

    const isEven = useMemo(() => {
        // let i = 0;
        // while (i < 2000000000) i++;
        console.log('Re-Calculating')
        return counterOne % 2 === 0;
    }, [counterOne])

    return (
        <>
            <h1>Counter</h1>
            <p>{isEven ? '(Counter-1) is Even' : '(Counter-1) is Odd'}</p>
            <button onClick={() => setCounterOne(counterOne + 1)}>Counter One: {counterOne}</button>
            <br />
            <button onClick={() => setCounterTwo(counterTwo + 1)}>Counter Two: {counterTwo}</button>
        </>
    )
}

export default Counter