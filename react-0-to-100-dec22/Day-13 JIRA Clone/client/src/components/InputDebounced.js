import React, { useState, useRef, useEffect, useCallback } from "react"
import { debounce } from "lodash"
import { Input } from "./Input"

const InputDebounced = ({ onChange, value: propsValue, ...rest }) => {
  const [value, setValue] = useState(propsValue)
  const isControlled = propsValue !== undefined

  const handleChange = useCallback(
    debounce((newValue) => onChange(newValue), 500),
    []
  )

  const valueRef = useRef(value)
  valueRef.current = value

  useEffect(() => {
    if (propsValue !== valueRef.current) {
      setValue(propsValue)
    }
  }, [propsValue])

  return (
    <Input
      {...rest}
      value={isControlled ? value : undefined}
      onChange={(newValue) => {
        setValue(newValue)
        handleChange(newValue)
      }}
    />
  )
}

export { InputDebounced }
