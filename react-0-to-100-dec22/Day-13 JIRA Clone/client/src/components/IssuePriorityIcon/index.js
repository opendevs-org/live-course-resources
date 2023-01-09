import React from "react"
import { IssuePriority } from "../../constants/issues"
import { PriorityIcon } from "./styles"

const IssuePriorityIcon = ({ priority, ...otherProps }) => {
  const iconType = [IssuePriority.LOW, IssuePriority.LOWEST].includes(priority)
    ? "arrow-down"
    : "arrow-up"

  return <PriorityIcon type={iconType} color={priority} size={18} {...otherProps} />
}

export { IssuePriorityIcon }
