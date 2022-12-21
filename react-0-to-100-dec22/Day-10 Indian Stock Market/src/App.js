import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage"
import StockPage from "./Pages/StockPage"
import Header from "./components/Header"

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stock/:id" element={<StockPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
