import React from "react"
import { IssuePriority, IssuePriorityCopy } from "../../../../../constants/issues"
import { Select } from "../../../../../components/Select"
import { IssuePriorityIcon } from "../../../../../components/IssuePriorityIcon"
import { SectionTitle } from "../styles"
import { Priority, Label } from "./styles"

const ProjectBoardIssueDetailsPriority = ({ issue, updateIssue }) => (
  <>
    <SectionTitle>Priority</SectionTitle>
    <Select
      variant="empty"
      withClearValue={false}
      dropdownWidth={343}
      name="priority"
      value={issue.priority}
      options={Object.values(IssuePriority).map((priority) => ({
        value: priority,
        label: IssuePriorityCopy[priority],
      }))}
      onChange={(priority) => updateIssue({ priority })}
      renderValue={({ value: priority }) => renderPriorityItem(priority, true)}
      renderOption={({ value: priority }) => renderPriorityItem(priority)}
    />
  </>
)

const renderPriorityItem = (priority, isValue) => (
  <Priority isValue={isValue}>
    <IssuePriorityIcon priority={priority} />
    <Label>{IssuePriorityCopy[priority]}</Label>
  </Priority>
)

export { ProjectBoardIssueDetailsPriority }
