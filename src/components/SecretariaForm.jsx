import { useState } from "react";
import { criarSecretaria } from "../api/secretariaApi";
import { TextField, Button, Grid, Box } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import FeedbackDialog from "./FeedbackDialog";
import { useSnackbar } from "../context/SnackbarContext";

export default function SecretariaForm({ onCreated }) {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [dialog, setDialog] = useState({ open: false, title: "", message: "", type: "" });
  const { showMessage } = useSnackbar();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    criarSecretaria(form)
      .then((res) => {
        // chama o refetch passado pelo pai
        onCreated();
        showMessage("Secretaria criada com sucesso!", "success");
        setDialog({ open: true, title: "Sucesso", message: "Secretaria criada com sucesso!", type: "success" });
        setForm({ nome: "", email: "", telefone: "" });
      })
      .catch((err) => {
        const msg = err.type === "validation" ? Object.values(err.data).join(", ") : err.message || "Erro inesperado";
        showMessage(msg, "error");
        setDialog({ open: true, title: "Erro", message: msg, type: "error" });
      });
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField label="Nome" name="nome" value={form.nome} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth required />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField label="Telefone" name="telefone" value={form.telefone} onChange={handleChange} fullWidth />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />}>
              Salvar
            </Button>
          </Grid>
        </Grid>
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
