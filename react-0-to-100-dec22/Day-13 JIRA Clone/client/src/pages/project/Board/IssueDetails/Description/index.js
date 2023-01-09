import React, { Fragment, useState } from "react"
import { getTextContentsFromHtmlString } from "../../../../../utils/browser"
import { TextEditor } from "../../../../../components/TextEditor"
import { TextEditedContent } from "../../../../../components/TextEditedContent"
import { Button } from "../../../../../components/Button"
import { Title, EmptyLabel, Actions } from "./styles"

const ProjectBoardIssueDetailsDescription = ({ issue, updateIssue }) => {
  const [description, setDescription] = useState(issue.description)
  const [isEditing, setEditing] = useState(false)

  const handleUpdate = () => {
    setEditing(false)
    updateIssue({ description })
  }

  const isDescriptionEmpty = getTextContentsFromHtmlString(description).trim().length === 0

  return (
    <Fragment>
      <Title>Description</Title>
      {isEditing ? (
        <Fragment>
          <TextEditor
            placeholder="Describe the issue"
            defaultValue={description}
            onChange={setDescription}
          />
          <Actions>
            <Button variant="primary" onClick={handleUpdate}>
              Save
            </Button>
            <Button variant="empty" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </Actions>
        </Fragment>
      ) : (
        <Fragment>
          {isDescriptionEmpty ? (
            <EmptyLabel onClick={() => setEditing(true)}>Add a description...</EmptyLabel>
          ) : (
            <TextEditedContent content={description} onClick={() => setEditing(true)} />
          )}
        </Fragment>
      )}
    </Fragment>
  )
}

export { ProjectBoardIssueDetailsDescription }
