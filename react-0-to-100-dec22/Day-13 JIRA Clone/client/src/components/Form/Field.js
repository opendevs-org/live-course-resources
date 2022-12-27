import React from "react"
import { uniqueId } from "lodash"
import { Input } from "../Input"
import { Select } from "../Select"
import { Textarea } from "../Textarea"
import { TextEditor } from "../TextEditor"
import { DatePicker } from "../DatePicker"
import { StyledField, FieldLabel, FieldTip, FieldError } from "./styles"

const generateField = (FormComponent) => {
  const FieldComponent = ({ className, label, tip, error, name, ...otherProps }) => {
    const fieldId = uniqueId("form-field-")

    return (
      <StyledField
        className={className}
        hasLabel={!!label}
        data-testid={name ? `form-field:${name}` : "form-field"}
      >
        {label && <FieldLabel htmlFor={fieldId}>{label}</FieldLabel>}
        <FormComponent id={fieldId} invalid={!!error} name={name} {...otherProps} />
        {tip && <FieldTip>{tip}</FieldTip>}
        {error && <FieldError>{error}</FieldError>}
      </StyledField>
    )
  }

  return FieldComponent
}

export default {
  Input: generateField(Input),
  Select: generateField(Select),
  Textarea: generateField(Textarea),
  TextEditor: generateField(TextEditor),
  DatePicker: generateField(DatePicker),
}
