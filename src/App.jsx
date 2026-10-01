import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SecretariaList from "./components/SecretariaList";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
        <Toolbar>
          <Button component={NavLink} to="/" sx={{ color: "white", mr: 2 }}>
            HOME
          </Button>
          <Button component={NavLink} to="/secretarias" sx={{ color: "white" }}>
            SECRETARIAS
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secretarias" element={<SecretariaList />} />
      </Routes>
    </>
  );
}
