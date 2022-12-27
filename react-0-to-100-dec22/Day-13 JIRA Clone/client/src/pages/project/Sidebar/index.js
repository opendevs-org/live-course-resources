import React from "react"
import { NavLink, useLocation } from "react-router-dom"
import { ProjectCategoryCopy } from "../../../constants/projects"
import { Icon } from "../../../components/Icon"
import { ProjectAvatar } from "../../../components/ProjectAvatar"
import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
  ProjectCategory,
  Divider,
  LinkItem,
  LinkText,
  NotImplemented,
} from "./styles"

const ProjectSidebar = ({ project }) => {
  const location = useLocation()

  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>{project.name}</ProjectName>
          <ProjectCategory>{ProjectCategoryCopy[project.category]} project</ProjectCategory>
        </ProjectTexts>
      </ProjectInfo>

      {renderLinkItem("Kanban Board", "board", "board")}
      {renderLinkItem("Project settings", "settings", "settings")}
      <Divider />
      {renderLinkItem("Releases", "shipping")}
      {renderLinkItem("Issues and filters", "issues")}
      {renderLinkItem("Pages", "page")}
      {renderLinkItem("Reports", "reports")}
      {renderLinkItem("Components", "component")}
    </Sidebar>
  )
}

const renderLinkItem = (text, iconType, path) => {
  const isImplemented = !!path

  const linkItemProps = isImplemented ? { as: NavLink, to: path } : { as: "div" }

  return (
    <LinkItem {...linkItemProps}>
      <Icon type={iconType} />
      <LinkText>{text}</LinkText>
      {!isImplemented && <NotImplemented>Not implemented</NotImplemented>}
    </LinkItem>
  )
}

export { ProjectSidebar }
