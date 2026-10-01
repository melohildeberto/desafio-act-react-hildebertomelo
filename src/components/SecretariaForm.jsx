import { useState } from "react";
import { criarSecretaria } from "../api/secretariaApi";
import { TextField, Button, Box } from "@mui/material";
import FeedbackDialog from "./FeedbackDialog";
import { useSnackbar } from "../context/SnackbarContext";

export default function SecretariaForm({ onCreated }) {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [dialog, setDialog] = useState({ open: false, title: "", message: "", type: "" });
  const { showMessage } = useSnackbar();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    criarSecretaria(form)
      .then((res) => {
        onCreated(res.data);
        setDialog({
          open: true,
          title: "Sucesso",
          message: "Secretaria criada com sucesso!",
          type: "success",
        });
        showMessage("Secretaria criada com sucesso!", "success");
        setForm({ nome: "", email: "", telefone: "" });
      })
      .catch((err) => {
        switch (err.type) {
          case "validation":
            // Exibe mensagens de validação vindas do backend
            const msg = Object.values(err.data).join(", ");
            setDialog({ open: true, title: "Erro de Validação", message: msg, type: "error" });
            showMessage(msg, "error");
            break;
          case "not_found":
            setDialog({ open: true, title: "Erro", message: err.message, type: "error" });
            showMessage(err.message, "error");
            break;
          case "conflict":
            setDialog({ open: true, title: "Erro", message: err.message, type: "error" });
            showMessage(err.message, "error");
            break;
          default:
            setDialog({
              open: true,
              title: "Erro",
              message: "Erro inesperado ao salvar secretaria",
              type: "error",
            });
            showMessage("Erro inesperado ao salvar secretaria", "error");
        }
      });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          label="Nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Telefone"
          name="telefone"
          value={form.telefone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Salvar
        </Button>
      </Box>

      <FeedbackDialog
        open={dialog.open}
        onClose={() => setDialog({ ...dialog, open: false })}
        title={dialog.title}
        message={dialog.message}
        type={dialog.type}
      />
    </>
  );
}
