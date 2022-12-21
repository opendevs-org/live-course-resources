import { CssBaseline, Grid } from "@mui/material"
import { Route, Routes, Navigate } from "react-router-dom"
import { Header } from "./components/header"
import { SideNav } from "./components/sidenav"
import { Homepage } from "./pages/homepage"
import { UserPage } from './pages/user'
import { Create } from "./pages/create"
import { NewEntry } from "./pages/create/new"
import { EditEntry } from "./pages/create/edit"
import { IdEntryPage } from "./pages/create/id"
import { LoginPage } from "./pages/login"
import { Private } from "./components/private"
import { NotFound404 } from "./pages/not-found"

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container>
        <Grid item xs={2}>
          <SideNav links={[
            { to: '/home', label: 'Homepage' },
            { to: '/create', label: 'Create' },
          ]} />
        </Grid>
        <Grid item xs={10} padding={2}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={
              <Private>
                <Homepage />
              </Private>
            } />
            <Route path="/create">
              <Route index element={
                <Private>
                  <Create />
                </Private>
              } />
              <Route path="new" element={<NewEntry />} /> {/** /create */}
              <Route path="edit" element={<EditEntry />} />
              <Route path=":id" element={<IdEntryPage />} />
            </Route>
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export { App }
