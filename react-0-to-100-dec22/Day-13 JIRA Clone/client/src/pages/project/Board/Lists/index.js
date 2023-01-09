import React from "react"
import { DragDropContext } from "react-beautiful-dnd"
import { useCurrentUser } from "../../../../hooks/currentUser"
import { api } from "../../../../utils/api"
import { moveItemWithinArray, insertItemIntoArray } from "../../../../utils/javascript"
import { IssueStatus } from "../../../../constants/issues"
import { ProjectBoardList } from "./List"
import { Lists } from "./styles"

const ProjectBoardLists = ({ project, filters, updateLocalProjectIssues }) => {
  const { currentUserId } = useCurrentUser()

  const handleIssueDrop = ({ draggableId, destination, source }) => {
    if (!isPositionChanged(source, destination)) return

    const issueId = Number(draggableId)

    api.optimisticUpdate(`/issues/${issueId}`, {
      updatedFields: {
        status: destination.droppableId,
        listPosition: calculateIssueListPosition(project.issues, destination, source, issueId),
      },
      currentFields: project.issues.find(({ id }) => id === issueId),
      setLocalData: (fields) => updateLocalProjectIssues(issueId, fields),
    })
  }

  return (
    <DragDropContext onDragEnd={handleIssueDrop}>
      <Lists>
        {Object.values(IssueStatus).map((status) => (
          <ProjectBoardList
            key={status}
            status={status}
            project={project}
            filters={filters}
            currentUserId={currentUserId}
          />
        ))}
      </Lists>
    </DragDropContext>
  )
}

const isPositionChanged = (destination, source) => {
  if (!destination) return false
  const isSameList = destination.droppableId === source.droppableId
  const isSamePosition = destination.index === source.index
  return !isSameList || !isSamePosition
}

const calculateIssueListPosition = (...args) => {
  const { prevIssue, nextIssue } = getAfterDropPrevNextIssue(...args)
  let position

  if (!prevIssue && !nextIssue) {
    position = 1
  } else if (!prevIssue) {
    position = nextIssue.listPosition - 1
  } else if (!nextIssue) {
    position = prevIssue.listPosition + 1
  } else {
    position = prevIssue.listPosition + (nextIssue.listPosition - prevIssue.listPosition) / 2
  }
  return position
}

const getAfterDropPrevNextIssue = (allIssues, destination, source, droppedIssueId) => {
  const beforeDropDestinationIssues = getSortedListIssues(allIssues, destination.droppableId)
  const droppedIssue = allIssues.find((issue) => issue.id === droppedIssueId)
  const isSameList = destination.droppableId === source.droppableId

  const afterDropDestinationIssues = isSameList
    ? moveItemWithinArray(beforeDropDestinationIssues, droppedIssue, destination.index)
    : insertItemIntoArray(beforeDropDestinationIssues, droppedIssue, destination.index)

  return {
    prevIssue: afterDropDestinationIssues[destination.index - 1],
    nextIssue: afterDropDestinationIssues[destination.index + 1],
  }
}

const getSortedListIssues = (issues, status) =>
  issues.filter((issue) => issue.status === status).sort((a, b) => a.listPosition - b.listPosition)

export { ProjectBoardLists }
