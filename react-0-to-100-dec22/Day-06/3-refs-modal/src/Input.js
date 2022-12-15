import { forwardRef } from 'react'

const Input = (props, ref) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <input id={props.id} name={props.id} ref={ref} />
        </>
    )
}

export default forwardRef(Input)
