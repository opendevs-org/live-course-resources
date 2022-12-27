import React from "react"
import { IssueType, IssueTypeCopy } from "../../../../../constants/issues"
import { IssueTypeIcon } from "../../../../../components/IssueTypeIcon"
import { Select } from "../../../../../components/Select"
import { TypeButton, Type, TypeLabel } from "./styles"

const ProjectBoardIssueDetailsType = ({ issue, updateIssue }) => (
  <Select
    variant="empty"
    dropdownWidth={150}
    withClearValue={false}
    name="type"
    value={issue.type}
    options={Object.values(IssueType).map((type) => ({
      value: type,
      label: IssueTypeCopy[type],
    }))}
    onChange={(type) => updateIssue({ type })}
    renderValue={({ value: type }) => (
      <TypeButton variant="empty" icon={<IssueTypeIcon type={type} />}>
        {`${IssueTypeCopy[type]}-${issue.id}`}
      </TypeButton>
    )}
    renderOption={({ value: type }) => (
      <Type key={type} onClick={() => updateIssue({ type })}>
        <IssueTypeIcon type={type} top={1} />
        <TypeLabel>{IssueTypeCopy[type]}</TypeLabel>
      </Type>
    )}
  />
)

export { ProjectBoardIssueDetailsType }
