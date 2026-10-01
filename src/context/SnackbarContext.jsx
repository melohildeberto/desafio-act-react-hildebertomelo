// src/context/SnackbarContext.jsx
import { createContext, useContext, useState } from "react";
import GlobalSnackbar from "../components/GlobalSnackbar";

const SnackbarContext = createContext();

export function SnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "info" });

  const showMessage = (message, severity = "info") => {
    setSnackbar({ open: true, message, severity });
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <GlobalSnackbar
        open={snackbar.open}
        onClose={handleClose}
        message={snackbar.message}
        severity={snackbar.severity}
      />
    </SnackbarContext.Provider>
  );
}

export const useSnackbar = () => useContext(SnackbarContext);
