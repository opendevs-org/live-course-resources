import React from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import { useMergeState } from "../../../hooks/mergeState"
import { Breadcrumbs } from "../../../components/Breadcrumbs"
import { Modal } from "../../../components/Modal"
import { ProjectBoardHeader } from "./Header"
import { ProjectBoardFilters } from "./Filters"
import { ProjectBoardLists } from "./Lists"
import { ProjectBoardIssueDetails } from "./IssueDetails"

const defaultFilters = {
  searchTerm: "",
  userIds: [],
  myOnly: false,
  recent: false,
}

const ProjectBoard = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const navigate = useNavigate()

  const [filters, mergeFilters] = useMergeState(defaultFilters)

  return (
    <>
      <Breadcrumbs items={["Projects", project.name, "Kanban Board"]} />
      <ProjectBoardHeader />
      <ProjectBoardFilters
        projectUsers={project.users}
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <ProjectBoardLists
        project={project}
        filters={filters}
        updateLocalProjectIssues={updateLocalProjectIssues}
      />
      <Routes>
        <Route
          path="issues/:issueId"
          element={
            <Modal
              isOpen
              testid="modal:issue-details"
              width={1040}
              withCloseIcon={false}
              onClose={() => navigate("")}
              renderContent={(modal) => (
                <ProjectBoardIssueDetails
                  projectUsers={project.users}
                  fetchProject={fetchProject}
                  updateLocalProjectIssues={updateLocalProjectIssues}
                  modalClose={modal.close}
                />
              )}
            />
          }
        />
      </Routes>
    </>
  )
}

export { ProjectBoard }
