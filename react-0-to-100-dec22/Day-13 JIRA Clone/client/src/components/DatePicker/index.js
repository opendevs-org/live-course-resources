import React, { useState, useRef } from "react"
import { formatDate, formatDateTime } from "../../utils/dateTime"
import { useOnOutsideClick } from "../../hooks/onOutsideClick"
import { Input } from "../Input"
import { DatePickerDateSection } from "./DateSection"
import { DatePickerTimeSection } from "./TimeSection"
import { StyledDatePicker, Dropdown } from "./styles"

const getFormattedInputValue = (value, withTime) => {
  if (!value) return ""
  return withTime ? formatDateTime(value) : formatDate(value)
}

const DatePicker = ({ className, withTime = true, value, onChange, ...inputProps }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const $containerRef = useRef()

  useOnOutsideClick($containerRef, isDropdownOpen, () => setDropdownOpen(false))

  return (
    <StyledDatePicker ref={$containerRef}>
      <Input
        icon="calendar"
        {...inputProps}
        className={className}
        autoComplete="off"
        value={getFormattedInputValue(value, withTime)}
        onClick={() => setDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <Dropdown withTime={withTime}>
          <DatePickerDateSection
            withTime={withTime}
            value={value}
            onChange={onChange}
            setDropdownOpen={setDropdownOpen}
          />
          {withTime && (
            <DatePickerTimeSection
              value={value}
              onChange={onChange}
              setDropdownOpen={setDropdownOpen}
            />
          )}
        </Dropdown>
      )}
    </StyledDatePicker>
  )
}

export { DatePicker }
