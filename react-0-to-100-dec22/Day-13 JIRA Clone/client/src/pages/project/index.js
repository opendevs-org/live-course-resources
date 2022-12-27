import React from "react"
import {
  Route,
  Navigate,
  useNavigate,
  Routes,
  useSearchParams,
  useLocation,
} from "react-router-dom"
import { useApi } from "../../hooks/api"
import { updateArrayItemById } from "../../utils/javascript"
import { PageLoader } from "../../components/PageLoader"
import { PageError } from "../../components/PageError"
import { Modal } from "../../components/Modal"
import { ProjectNavbarLeft } from "./NavbarLeft"
import { ProjectSidebar } from "./Sidebar"
import { ProjectBoard } from "./Board"
import { ProjectIssueSearch } from "./IssueSearch"
import { ProjectIssueCreate } from "./IssueCreate"
import { ProjectSettings } from "./ProjectSettings"
import { ProjectPage } from "./styles"

const Project = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams()

  const [{ data, error, setLocalData }, fetchProject] = useApi.get("/project")

  const updateQuery = (update) => {
    const copy = new URLSearchParams({ ...query, ...update })
    setQuery(copy)
  }

  const open = (param) => {
    updateQuery({ [`modal-${param}`]: true })
  }

  const close = (param) => {
    updateQuery({ [`modal-${param}`]: "" })
  }

  const isOpen = (param) => {
    // true -> false -> true
    // 0 -> true -> false
    // ''
    // undef ---> boolean
    return !!query.get(`modal-${param}`)
  }

  const createQueryParamModalHelpers = (param) => ({
    open: () => open(param),
    close: () => close(param),
    isOpen: () => isOpen(param),
  })

  const issueSearchModalHelpers = createQueryParamModalHelpers("issue-search")
  const issueCreateModalHelpers = createQueryParamModalHelpers("issue-create")

  const updateLocalProjectIssues = (issueId, updatedFields) => {
    setLocalData((currentData) => ({
      project: {
        ...currentData.project,
        issues: updateArrayItemById(currentData.project.issues, issueId, updatedFields),
      },
    }))
  }

  if (!data) return <PageLoader />
  if (error) return <PageError />

  const { project } = data

  return (
    <ProjectPage>
      <ProjectNavbarLeft
        issueSearchModalOpen={issueSearchModalHelpers.open}
        issueCreateModalOpen={issueCreateModalHelpers.open}
      />

      <ProjectSidebar project={project} />

      {issueSearchModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-search"
          variant="aside"
          width={600}
          onClose={issueSearchModalHelpers.close}
          renderContent={() => <ProjectIssueSearch project={project} />}
        />
      )}

      {issueCreateModalHelpers.isOpen() && (
        <Modal
          isOpen
          testid="modal:issue-create"
          width={800}
          withCloseIcon={false}
          onClose={issueCreateModalHelpers.close}
          renderContent={(modal) => (
            <ProjectIssueCreate
              project={project}
              fetchProject={fetchProject}
              onCreate={() => navigate(`${location.pathname}/board`)}
              modalClose={modal.close}
            />
          )}
        />
      )}

      <Routes>
        <Route
          path="board/*"
          element={
            <ProjectBoard
              project={project}
              fetchProject={fetchProject}
              updateLocalProjectIssues={updateLocalProjectIssues}
            />
          }
        />
        <Route
          path="settings"
          element={<ProjectSettings project={project} fetchProject={fetchProject} />}
        />
        <Route path="*" element={<Navigate to="board" />} />
      </Routes>
    </ProjectPage>
  )
}

export { Project }
