import { CssBaseline, Grid } from "@mui/material"
import { Route, Routes, useLocation } from "react-router-dom"
import { Header } from "./components/header"
import { SideNav } from "./components/sidenav"
import { Homepage } from "./pages/homepage"
import { UserPage } from './pages/user'
import { Create } from "./pages/create"
import { NewEntry } from "./pages/create/new"
import { EditEntry } from "./pages/create/edit"
import { IdEntryPage } from "./pages/create/id"
import { useEffect } from "react"

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
            <Route path="/home" element={<Homepage />} />
            <Route path="/create">
              <Route index element={<Create />} />
              <Route path="new" element={<NewEntry />} /> {/** /create */}
              <Route path="edit" element={<EditEntry />} />
              <Route path=":id" element={<IdEntryPage />} />
            </Route>
            <Route path=":pq" element={<UserPage />} />
          </Routes>
        </Grid>
      </Grid>
    </>
  )
}

export { App }
