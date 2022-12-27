import React from "react"
import "quill/dist/quill.snow.css"
import { Content } from "./styles"

const TextEditedContent = ({ content, ...otherProps }) => (
  <div className="ql-snow">
    <Content className="ql-editor" dangerouslySetInnerHTML={{ __html: content }} {...otherProps} />
  </div>
)

export { TextEditedContent }
