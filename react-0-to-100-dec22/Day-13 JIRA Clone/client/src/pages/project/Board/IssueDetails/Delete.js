import React from "react"
import { api } from "../../../../utils/api"
import { toast } from "../../../../utils/toast"
import { Button } from "../../../../components/Button"
import { ConfirmModal } from "../../../../components/ConfirmModal"

const ProjectBoardIssueDetailsDelete = ({ issue, fetchProject, modalClose }) => {
  const handleIssueDelete = async () => {
    try {
      await api.delete(`/issues/${issue.id}`)
      await fetchProject()
      modalClose()
    } catch (error) {
      toast.error(error)
    }
  }

  return (
    <ConfirmModal
      title="Are you sure you want to delete this issue?"
      message="Once you delete, it's gone for good."
      confirmText="Delete issue"
      onConfirm={handleIssueDelete}
      renderLink={(modal) => (
        <Button icon="trash" iconSize={19} variant="empty" onClick={modal.open} />
      )}
    />
  )
}

export { ProjectBoardIssueDetailsDelete }
