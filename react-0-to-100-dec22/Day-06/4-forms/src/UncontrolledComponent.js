import { useRef } from 'react'
export const UncontrolledComponent = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder='name' ref={nameRef} />
            <input name="email" type="email" placeholder='email' ref={emailRef} />
            <input name="phone" type="tel" placeholder='phone' ref={phoneRef} />
            <button type="submit">Submit</button>
        </form>
    )
}
