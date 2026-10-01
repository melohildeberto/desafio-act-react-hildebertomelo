import { Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import SecretariasPage from "./pages/SecretariasPage";
import SecretariaPage from "./pages/SecretariaPage";

function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Gestão de Secretarias
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/secretarias">Secretarias</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<SecretariasPage />} />
        <Route path="/secretarias" element={<SecretariasPage />} />
        <Route path="/secretarias/:id" element={<SecretariaPage />} />
      </Routes>
    </>
  );
}

export default App;
