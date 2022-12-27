import React, { useState } from "react"
import { api } from "../../../../../../utils/api"
import { useCurrentUser } from "../../../../../../hooks/currentUser"
import { toast } from "../../../../../../utils/toast"
import { ProjectBoardIssueDetailsCommentsBodyForm } from "../BodyForm"
import { ProjectBoardIssueDetailsCommentsCreateProTip } from "./ProTip"
import { Create, UserAvatar, Right, FakeTextarea } from "./styles"

const ProjectBoardIssueDetailsCommentsCreate = ({ issueId, fetchIssue }) => {
  const [isFormOpen, setFormOpen] = useState(false)
  const [isCreating, setCreating] = useState(false)
  const [body, setBody] = useState("")

  const { currentUser } = useCurrentUser()

  const handleCommentCreate = async () => {
    try {
      setCreating(true)
      await api.post(`/comments`, { body, issueId, userId: currentUser.id })
      await fetchIssue()
      setFormOpen(false)
      setCreating(false)
      setBody("")
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <Create>
      {currentUser && <UserAvatar name={currentUser.name} avatarUrl={currentUser.avatarUrl} />}
      <Right>
        {isFormOpen ? (
          <ProjectBoardIssueDetailsCommentsBodyForm
            value={body}
            onChange={setBody}
            isWorking={isCreating}
            onSubmit={handleCommentCreate}
            onCancel={() => setFormOpen(false)}
          />
        ) : (
          <>
            <FakeTextarea onClick={() => setFormOpen(true)}>Add a comment...</FakeTextarea>
            <ProjectBoardIssueDetailsCommentsCreateProTip setFormOpen={setFormOpen} />
          </>
        )}
      </Right>
    </Create>
  )
}

export { ProjectBoardIssueDetailsCommentsCreate }
