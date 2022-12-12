import { useState } from "react"

// if-else
// ternary operatior
// 0 || 1 ==> 1
// 0 && 1 ==> 0
// switch-case 

const Counter = () => {
  const [show, setShow] = useState(true)
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return show ? (
    <div>
      <p>Counter value is {counter}</p>
      <button onClick={increment}>Click me</button>
      <button onClick={() => setShow(false)}>Hide me</button>
    </div>
  ) : (
    <button onClick={() => setShow(true)}>Show me</button>
  )
}

export { Counter }
