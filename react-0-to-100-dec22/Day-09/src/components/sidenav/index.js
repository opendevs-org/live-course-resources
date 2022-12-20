import { ListItemText, MenuItem, MenuList, Paper } from "@mui/material"
import { Link, NavLink } from "react-router-dom"

const SideNav = ({ links = [] }) => {
  return (
    <Paper elevation={2} sx={{ height: '100vh', borderRadius: '0' }}>
      <MenuList>
        {
          links.map(link => (
            <MenuItem>
              <ListItemText>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => {
                    if (isActive) {
                      return {
                        color: 'red'
                      }
                    }
                  }}
                >
                  {link.label}
                </NavLink>
              </ListItemText>
            </MenuItem>
          ))
        }
      </MenuList>
    </Paper>
  )
}

export { SideNav }
