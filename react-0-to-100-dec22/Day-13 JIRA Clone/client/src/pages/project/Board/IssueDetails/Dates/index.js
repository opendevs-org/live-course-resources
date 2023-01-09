import React from "react"
import { formatDateTimeConversational } from "../../../../../utils/dateTime"
import { Dates } from "./styles"

const ProjectBoardIssueDetailsDates = ({ issue }) => (
  <Dates>
    <div>Created at {formatDateTimeConversational(issue.createdAt)}</div>
    <div>Updated at {formatDateTimeConversational(issue.updatedAt)}</div>
  </Dates>
)

export { ProjectBoardIssueDetailsDates }
