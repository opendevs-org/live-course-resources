import { calculateAverage } from '../../utils/array';
export const AverageCard = ({ arr }) => {
    const avg = calculateAverage(arr);

    const throwErrOnClick = () => {
        calculateAverage([])
    }

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
            <button onClick={throwErrOnClick}>Nuke!</button>
        </div>
    )
}
