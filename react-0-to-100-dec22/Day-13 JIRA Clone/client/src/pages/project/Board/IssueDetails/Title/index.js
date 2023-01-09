import React, { Fragment, useRef, useState } from "react"
import { KeyCodes } from "../../../../../constants/keyCodes"
import { is, generateErrors } from "../../../../../utils/validation"
import { TitleTextarea, ErrorText } from "./styles"

const ProjectBoardIssueDetailsTitle = ({ issue, updateIssue }) => {
  const $titleInputRef = useRef()
  const [error, setError] = useState(null)

  const handleTitleChange = () => {
    setError(null)

    const title = $titleInputRef.current.value
    if (title === issue.title) return

    const errors = generateErrors({ title }, { title: [is.required(), is.maxLength(200)] })

    if (errors.title) {
      setError(errors.title)
    } else {
      updateIssue({ title })
    }
  }

  return (
    <Fragment>
      <TitleTextarea
        minRows={1}
        placeholder="Short summary"
        defaultValue={issue.title}
        ref={$titleInputRef}
        onBlur={handleTitleChange}
        onKeyDown={(event) => {
          if (event.keyCode === KeyCodes.ENTER) {
            event.target.blur()
          }
        }}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </Fragment>
  )
}

export { ProjectBoardIssueDetailsTitle }
