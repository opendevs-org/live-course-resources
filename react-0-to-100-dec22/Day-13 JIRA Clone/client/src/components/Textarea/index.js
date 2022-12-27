import React, { forwardRef } from "react"
import TextareaAutoSize from "react-textarea-autosize"
import { StyledTextarea } from "./styles"

const Textarea = forwardRef(
  ({ className, invalid = false, onChange, minRows = 2, ...rest }, ref) => (
    <StyledTextarea className={className} invalid={invalid}>
      <TextareaAutoSize
        {...rest}
        minRows={minRows}
        onChange={(event) => onChange(event.target.value, event)}
        inputRef={ref || undefined}
      />
    </StyledTextarea>
  )
)

export { Textarea }
