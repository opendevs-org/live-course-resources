import React, { forwardRef } from "react"
import { color } from "../../utils/styles"
import { Icon } from "../Icon"
import { StyledButton, StyledSpinner, Text } from "./styles"

const getIconColor = (variant) =>
  ["secondary", "empty"].includes(variant) ? color.textDark : "#fff"

const Button = forwardRef(
  (
    {
      children,
      variant = "secondary",
      icon,
      iconSize = 18,
      disabled = false,
      isWorking = false,
      onClick = () => {},
      ...rest
    },
    ref
  ) => {
    const handleClick = () => {
      if (!disabled && !isWorking) {
        onClick()
      }
    }

    return (
      <StyledButton
        {...rest}
        onClick={handleClick}
        variant={variant}
        disabled={disabled || isWorking}
        isWorking={isWorking}
        iconOnly={!children}
        ref={ref}
      >
        {isWorking && <StyledSpinner size={26} color={getIconColor(variant)} />}

        {!isWorking && icon && typeof icon === "string" ? (
          <Icon type={icon} size={iconSize} color={getIconColor(variant)} />
        ) : (
          icon
        )}
        {children && <Text withPadding={isWorking || icon}>{children}</Text>}
      </StyledButton>
    )
  }
)

export { Button }
