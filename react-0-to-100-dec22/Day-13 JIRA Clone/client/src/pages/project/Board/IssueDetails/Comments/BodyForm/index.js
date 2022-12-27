import React, { Fragment, useRef } from "react"
import { Textarea } from "../../../../../../components/Textarea"
import { Actions, FormButton } from "./styles"

const ProjectBoardIssueDetailsCommentsBodyForm = ({
  value,
  onChange,
  isWorking,
  onSubmit,
  onCancel,
}) => {
  return (
    <Fragment>
      <Textarea autoFocus placeholder="Add a comment..." value={value} onChange={onChange} />
      <Actions>
        <FormButton variant="primary" isWorking={isWorking} onClick={onSubmit}>
          Save
        </FormButton>
        <FormButton variant="empty" onClick={onCancel}>
          Cancel
        </FormButton>
      </Actions>
    </Fragment>
  )
}

export { ProjectBoardIssueDetailsCommentsBodyForm }
