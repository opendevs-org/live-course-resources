import { Stack, Typography, Button, TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useUser } from "../../context/user"

const LoginPage = () => {
  const { setIsLoggedIn } = useUser()
  const navigate = useNavigate()

  const onLogin = () => {
    setIsLoggedIn(true)
    navigate(-1)
  }

  return (
    <Stack direction="column" spacing={2}>
      <Typography>Please login to proceed</Typography>
      <TextField placeholder="email"/>
      <TextField placeholder="password"/>
      <Button variant="contained" onClick={onLogin}>Login</Button>
    </Stack>
  )
}

export { LoginPage }
