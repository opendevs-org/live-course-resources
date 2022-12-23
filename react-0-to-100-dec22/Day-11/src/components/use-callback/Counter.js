// useCallback is a React Hook that lets you cache a function definition between re-renders.
// The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
// const cachedFn = useCallback(fn, dependencies)

import React, { useCallback, useState } from 'react'
import Button from './Button';
import Count from './Count';
import Title from './Title';

function Counter() {

    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementCounterOne = useCallback(() => {
        setCounterOne(counterOne + 1);
    }, [counterOne])

    const incrementCounterTwo = useCallback(() => {
        setCounterTwo(counterTwo + 1);
    }, [counterTwo])


    return (
        <>
            <Title />

            <Count text="1st Counter" value={counterOne} />
            <Button name="Increment Counter 1" handleClick={incrementCounterOne} />

            <Count text="2nd Counter" value={counterTwo} />
            <Button name="Increment Counter 2" handleClick={incrementCounterTwo} />
        </>
    )
}

export default Counter