import {
    AppBar,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <AppBar position="static" sx={{ backgroundColor: "black" }}>
            <Container>
                <Toolbar>
                    <Typography
                        onClick={() => navigate(`/`)}
                        variant="h6"
                        sx={{
                            flex: 1,
                            color: "gold",
                            fontFamily: "Montserrat",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        Indian Stock Tracker
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
