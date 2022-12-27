import React, { Fragment } from "react"
import { IssueStatus, IssueStatusCopy } from "../../../../../constants/issues"
import { Select } from "../../../../../components/Select"
import { Icon } from "../../../../../components/Icon"
import { SectionTitle } from "../styles"
import { Status } from "./styles"

const ProjectBoardIssueDetailsStatus = ({ issue, updateIssue }) => (
  <>
    <SectionTitle>Status</SectionTitle>
    <Select
      variant="empty"
      dropdownWidth={343}
      withClearValue={false}
      name="status"
      value={issue.status}
      options={Object.values(IssueStatus).map((status) => ({
        value: status,
        label: IssueStatusCopy[status],
      }))}
      onChange={(status) => updateIssue({ status })}
      renderValue={({ value: status }) => (
        <Status isValue color={status}>
          <div>{IssueStatusCopy[status]}</div>
          <Icon type="chevron-down" size={18} />
        </Status>
      )}
      renderOption={({ value: status }) => (
        <Status color={status}>{IssueStatusCopy[status]}</Status>
      )}
    />
  </>
)

export { ProjectBoardIssueDetailsStatus }
