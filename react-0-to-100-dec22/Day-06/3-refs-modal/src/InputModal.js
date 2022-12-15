import { useRef, useEffect } from 'react';
import Input from './Input';

export const InputModal = (props) => {
    const quantityRef = useRef();
    const modalRef = useRef();
    const overlayRef = useRef();

    const handleOnSubmit = () => {
        // pass value to parent component
        props.handleSubmit(quantityRef.current.value)
        props.handleClose();
    }

    const onClickOutside = (event) => {
        const element = event.target;

        if (
            overlayRef.current &&
            overlayRef.current.contains(element) &&
            modalRef.current &&
            !modalRef.current.contains(element)
        ) {
            props.handleClose()
        }
    }

    useEffect(() => {
        document.body.addEventListener("click", onClickOutside)

        quantityRef.current.focus();

        return () => {
            document.body.removeEventListener("click", onClickOutside)
        }
    }, [])

    return (
        <div className="modal--overlay" ref={overlayRef}>
            <div className='modal' ref={modalRef}>
                <h1>Edit quantity here</h1>

                <Input id="quantity" label="Quantity" ref={quantityRef} />

                <button onClick={handleOnSubmit}>Save</button>
            </div>
        </div>
    )

}
