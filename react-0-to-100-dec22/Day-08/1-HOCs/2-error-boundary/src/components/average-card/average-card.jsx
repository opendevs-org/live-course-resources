import { useEffect } from 'react';
import { useState } from 'react';
import { calculateAverage } from '../../utils/array';


export const AverageCard = ({ arr }) => {
    const [value, setValue] = useState(0);
    const avg = calculateAverage(arr);

    const throwErrOnClick = () => {
        try {
            throw new Error('Nuked!');
        } catch (error) {
            alert("Error occurred on click")
        }
    }

    const incrementValueToNuke = () => {
        setValue(value + 1);
    }

    useEffect(() => {
        if (value > 2) {
            throw new Error('Nuked!');
        }
    }, [value])

    return (
        <div style={{
            padding: 10,
            fontSize: 48,
            backgroundColor: 'green',
            borderRadius: 10,
            color: 'white',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.5)',
            border: '1px solid rgba(0, 0, 0, 0.5)',
        }}>
            The average of {arr.join(', ')} is <strong>{avg.toFixed(2)}</strong><br />
            <br />
            <button onClick={throwErrOnClick}>Throw Error on Click!</button>
            <br />
            {value}
            <br />
            <button onClick={incrementValueToNuke}>Nuke!</button>
        </div>
    )
}
