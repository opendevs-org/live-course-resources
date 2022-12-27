import React from "react"
import { TypeIcon } from "./styles"

const IssueTypeIcon = ({ type, ...otherProps }) => (
  <TypeIcon type={type} color={type} size={18} {...otherProps} />
)

export { IssueTypeIcon }
