import React from "react"
import { useLocation } from "react-router-dom"
import { Draggable } from "react-beautiful-dnd"
import { IssueTypeIcon } from "../../../../../../components/IssueTypeIcon"
import { IssuePriorityIcon } from "../../../../../../components/IssuePriorityIcon"
import { IssueLink, Issue, Title, Bottom, Assignees, AssigneeAvatar } from "./styles"

const ProjectBoardListIssue = ({ projectUsers, issue, index }) => {
  const location = useLocation()

  const assignees = issue.userIds.map((userId) => projectUsers.find((user) => user.id === userId))

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <IssueLink
          to={`${location.pathname}/issues/${issue.id}`}
          ref={provided.innerRef}
          data-testid="list-issue"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
            <Title>{issue.title}</Title>
            <Bottom>
              <div>
                <IssueTypeIcon type={issue.type} />
                <IssuePriorityIcon priority={issue.priority} top={-1} left={4} />
              </div>
              <Assignees>
                {assignees.map((user) => (
                  <AssigneeAvatar
                    key={user.id}
                    size={24}
                    avatarUrl={user.avatarUrl}
                    name={user.name}
                  />
                ))}
              </Assignees>
            </Bottom>
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  )
}

export { ProjectBoardListIssue }
