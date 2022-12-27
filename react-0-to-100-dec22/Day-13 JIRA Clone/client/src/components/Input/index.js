import React, { forwardRef } from "react"
import { StyledInput, InputElement, StyledIcon } from "./styles"

const Input = forwardRef(({ icon, className, filter, onChange, invalid = false, ...rest }, ref) => {
  const handleChange = (event) => {
    if (!filter || filter.test(event.target.value)) {
      onChange(event.target.value, event)
    }
  }

  return (
    <StyledInput className={className}>
      {icon && <StyledIcon type={icon} size={15} />}
      <InputElement
        {...rest}
        invalid={invalid}
        onChange={handleChange}
        hasIcon={!!icon}
        ref={ref}
      />
    </StyledInput>
  )
})

export { Input }
