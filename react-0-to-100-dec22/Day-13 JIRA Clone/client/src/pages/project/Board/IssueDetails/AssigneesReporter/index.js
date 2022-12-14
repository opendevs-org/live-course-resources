import React from "react"
import { Avatar } from "../../../../../components/Avatar"
import { Select } from "../../../../../components/Select"
import { Icon } from "../../../../../components/Icon"
import { SectionTitle } from "../styles"
import { User, Username } from "./styles"

const ProjectBoardIssueDetailsAssigneesReporter = ({ issue, updateIssue, projectUsers }) => {
  const getUserById = (userId) => projectUsers.find((user) => user.id === userId)

  const userOptions = projectUsers.map((user) => ({ value: user.id, label: user.name }))

  return (
    <>
      <SectionTitle>Assignees</SectionTitle>
      <Select
        isMulti
        variant="empty"
        dropdownWidth={343}
        placeholder="Unassigned"
        name="assignees"
        value={issue.userIds}
        options={userOptions}
        onChange={(userIds) => {
          updateIssue({ userIds, users: userIds.map(getUserById) })
        }}
        renderValue={({ value: userId, removeOptionValue }) =>
          renderUser(getUserById(userId), true, removeOptionValue)
        }
        renderOption={({ value: userId }) => renderUser(getUserById(userId), false)}
      />

      <SectionTitle>Reporter</SectionTitle>
      <Select
        variant="empty"
        dropdownWidth={343}
        withClearValue={false}
        name="reporter"
        value={issue.reporterId}
        options={userOptions}
        onChange={(userId) => updateIssue({ reporterId: userId })}
        renderValue={({ value: userId }) => renderUser(getUserById(userId), true)}
        renderOption={({ value: userId }) => renderUser(getUserById(userId))}
      />
    </>
  )
}

const renderUser = (user, isSelectValue, removeOptionValue) => (
  <User
    key={user.id}
    isSelectValue={isSelectValue}
    withBottomMargin={!!removeOptionValue}
    onClick={() => removeOptionValue && removeOptionValue()}
  >
    <Avatar avatarUrl={user.avatarUrl} name={user.name} size={24} />
    <Username>{user.name}</Username>
    {removeOptionValue && <Icon type="close" top={1} />}
  </User>
)

export { ProjectBoardIssueDetailsAssigneesReporter }
