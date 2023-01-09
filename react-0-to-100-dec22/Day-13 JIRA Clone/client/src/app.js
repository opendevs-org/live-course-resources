import { Routes, Route, Navigate } from "react-router-dom"
import { NormalizeStyles } from "./styles/NormalizeStyles"
import { BaseStyles } from "./styles/BaseStyles"
import { Toast } from "./components/Toast/index.js"
import { PageError } from "./components/PageError"
import { Authenticate } from "./pages/auth"
import { Project } from "./pages/project"
// We're importing .css because @font-face in styled-components causes font files
// to be constantly re-requested from the server (which causes screen flicker)
// https://github.com/styled-components/styled-components/issues/1593
import "./styles/fontStyles.css"

const App = () => {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Toast />
      <Routes>
        <Route path="/" element={<Navigate to="/project" replace />} />
        <Route path="/authenticate" element={<Authenticate />} />
        <Route path="/project/*" element={<Project />} />
        <Route path="*" element={<PageError />} />
      </Routes>
    </>
  )
}

export { App }
