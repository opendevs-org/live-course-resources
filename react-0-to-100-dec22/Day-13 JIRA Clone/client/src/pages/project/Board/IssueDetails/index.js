import React, { Fragment } from "react"
import { api } from "../../../../utils/api"
import { useApi } from "../../../../hooks/api"
import { PageError } from "../../../../components/PageError"
import { CopyLinkButton } from "../../../../components/CopyLinkButton"
import { Button } from "../../../../components/Button"
import { IssueDetailsLoader } from "./Loader"
import { ProjectBoardIssueDetailsType } from "./Type"
import { ProjectBoardIssueDetailsDelete } from "./Delete"
import { ProjectBoardIssueDetailsTitle } from "./Title"
import { ProjectBoardIssueDetailsDescription } from "./Description"
import { ProjectBoardIssueDetailsComments } from "./Comments"
import { ProjectBoardIssueDetailsStatus } from "./Status"
import { ProjectBoardIssueDetailsAssigneesReporter } from "./AssigneesReporter"
import { ProjectBoardIssueDetailsPriority } from "./Priority"
import { ProjectBoardIssueDetailsEstimateTracking } from "./EstimateTracking"
import { ProjectBoardIssueDetailsDates } from "./Dates"
import { TopActions, TopActionsRight, Content, Left, Right } from "./styles"
import { useParams } from "react-router-dom"

const ProjectBoardIssueDetails = ({
  projectUsers,
  fetchProject,
  updateLocalProjectIssues,
  modalClose,
}) => {
  const { issueId } = useParams()
  const [{ data, error, setLocalData }, fetchIssue] = useApi.get(`/issues/${issueId}`)

  if (!data) return <IssueDetailsLoader />
  if (error) return <PageError />

  const { issue } = data

  const updateLocalIssueDetails = (fields) =>
    setLocalData((currentData) => ({ issue: { ...currentData.issue, ...fields } }))

  const updateIssue = (updatedFields) => {
    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields,
      currentFields: issue,
      setLocalData: (fields) => {
        updateLocalIssueDetails(fields)
        updateLocalProjectIssues(issue.id, fields)
      },
    })
  }

  return (
    <Fragment>
      <TopActions>
        <ProjectBoardIssueDetailsType issue={issue} updateIssue={updateIssue} />
        <TopActionsRight>
          <CopyLinkButton variant="empty" />
          <ProjectBoardIssueDetailsDelete
            issue={issue}
            fetchProject={fetchProject}
            modalClose={modalClose}
          />
          <Button icon="close" iconSize={24} variant="empty" onClick={modalClose} />
        </TopActionsRight>
      </TopActions>
      <Content>
        <Left>
          <ProjectBoardIssueDetailsTitle issue={issue} updateIssue={updateIssue} />
          <ProjectBoardIssueDetailsDescription issue={issue} updateIssue={updateIssue} />
          <ProjectBoardIssueDetailsComments issue={issue} fetchIssue={fetchIssue} />
        </Left>
        <Right>
          <ProjectBoardIssueDetailsStatus issue={issue} updateIssue={updateIssue} />
          <ProjectBoardIssueDetailsAssigneesReporter
            issue={issue}
            updateIssue={updateIssue}
            projectUsers={projectUsers}
          />
          <ProjectBoardIssueDetailsPriority issue={issue} updateIssue={updateIssue} />
          <ProjectBoardIssueDetailsEstimateTracking issue={issue} updateIssue={updateIssue} />
          <ProjectBoardIssueDetailsDates issue={issue} />
        </Right>
      </Content>
    </Fragment>
  )
}

export { ProjectBoardIssueDetails }
