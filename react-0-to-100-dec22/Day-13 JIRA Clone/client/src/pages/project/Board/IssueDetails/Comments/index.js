import React from "react"
import { sortByNewest } from "../../../../../utils/javascript"
import { ProjectBoardIssueDetailsCommentsCreate } from "./Create"
import { ProjectBoardIssueDetailsComment } from "./Comment"
import { Comments, Title } from "./styles"

const ProjectBoardIssueDetailsComments = ({ issue, fetchIssue }) => (
  <Comments>
    <Title>Comments</Title>
    <ProjectBoardIssueDetailsCommentsCreate issueId={issue.id} fetchIssue={fetchIssue} />

    {sortByNewest(issue.comments, "createdAt").map((comment) => (
      <ProjectBoardIssueDetailsComment key={comment.id} comment={comment} fetchIssue={fetchIssue} />
    ))}
  </Comments>
)

export { ProjectBoardIssueDetailsComments }
