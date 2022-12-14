import { useState, useEffect } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => {
                console.log('count: ', count)
                return count + 1
            });
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <h4>Count is: {count}</h4>
    );
};
