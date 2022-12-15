import { useState } from 'react'
export const ControlledComponent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name)
        console.log(email)
        console.log(phone)
    }

    const handleNameChange = (event) => {
        console.log(event.target.value)
        if (event.target.value.search(/[^a-z]/gi) === -1) {
            setName(event.target.value)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder='name' value={name} onChange={handleNameChange} />
            <input name="email" type="email" placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} />
            <input name="phone" type="tel" placeholder='phone' value={phone} onChange={(event) => setPhone(event.target.value)} />
            <button type="submit">Submit</button>
        </form>
    )
}
