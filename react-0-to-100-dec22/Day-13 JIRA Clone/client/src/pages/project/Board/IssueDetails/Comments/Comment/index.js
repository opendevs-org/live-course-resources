import React, { Fragment, useState } from "react"
import { api } from "../../../../../../utils/api"
import { toast } from "../../../../../../utils/toast"
import { formatDateTimeConversational } from "../../../../../../utils/dateTime"
import { ConfirmModal } from "../../../../../../components/ConfirmModal"
import { ProjectBoardIssueDetailsCommentsBodyForm } from "../BodyForm"
import {
  Comment,
  UserAvatar,
  Content,
  Username,
  CreatedAt,
  Body,
  EditLink,
  DeleteLink,
} from "./styles"

const ProjectBoardIssueDetailsComment = ({ comment, fetchIssue }) => {
  const [isFormOpen, setFormOpen] = useState(false)
  const [isUpdating, setUpdating] = useState(false)
  const [body, setBody] = useState(comment.body)

  const handleCommentDelete = async () => {
    try {
      await api.delete(`/comments/${comment.id}`)
      await fetchIssue()
    } catch (error) {
      toast.error(error)
    }
  }

  const handleCommentUpdate = async () => {
    try {
      setUpdating(true)
      await api.put(`/comments/${comment.id}`, { body })
      await fetchIssue()
      setUpdating(false)
      setFormOpen(false)
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <Comment data-testid="issue-comment">
      <UserAvatar name={comment.user.name} avatarUrl={comment.user.avatarUrl} />
      <Content>
        <Username>{comment.user.name}</Username>
        <CreatedAt>{formatDateTimeConversational(comment.createdAt)}</CreatedAt>

        {isFormOpen ? (
          <ProjectBoardIssueDetailsCommentsBodyForm
            value={body}
            onChange={setBody}
            isWorking={isUpdating}
            onSubmit={handleCommentUpdate}
            onCancel={() => setFormOpen(false)}
          />
        ) : (
          <Fragment>
            <Body>{comment.body}</Body>
            <EditLink onClick={() => setFormOpen(true)}>Edit</EditLink>
            <ConfirmModal
              title="Are you sure you want to delete this comment?"
              message="Once you delete, it's gone for good."
              confirmText="Delete comment"
              onConfirm={handleCommentDelete}
              renderLink={(modal) => <DeleteLink onClick={modal.open}>Delete</DeleteLink>}
            />
          </Fragment>
        )}
      </Content>
    </Comment>
  )
}

export { ProjectBoardIssueDetailsComment }
