import { useState, useEffect } from "react";
import { atualizarSecretaria, buscarSecretariaPorId } from "../api/secretariaApi";
import { TextField, Button, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import FeedbackDialog from "./FeedbackDialog";
import { useSnackbar } from "../context/SnackbarContext";

export default function SecretariaEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });
  const [dialog, setDialog] = useState({ open: false, title: "", message: "", type: "" });
  const { showMessage } = useSnackbar();

  useEffect(() => {
    if (!id) {
      setDialog({ open: true, title: "Erro", message: "ID da secretaria é obrigatório", type: "error" });
      showMessage("ID da secretaria é obrigatório", "error");
      return;
    }
    buscarSecretariaPorId(id)
      .then((res) => setForm(res.data))
      .catch((err) => {
        setDialog({ open: true, title: "Erro", message: err.message, type: "error" });
        showMessage(err.message, "error");
      });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    atualizarSecretaria(id, form)
      .then(() => {
        setDialog({ open: true, title: "Sucesso", message: "Secretaria atualizada com sucesso!", type: "success" });
        showMessage("Secretaria atualizada com sucesso!", "success");
        setTimeout(() => navigate(`/secretarias/${id}`), 2000);
      })
      .catch((err) => {
        if (err.type === "validation") {
          const msg = Object.values(err.data).join(", ");
          setDialog({ open: true, title: "Erro de Validação", message: msg, type: "error" });
          showMessage(msg, "error");
        } else {
          setDialog({ open: true, title: "Erro", message: err.message, type: "error" });
          showMessage(err.message, "error");
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
          value={form.telefone || ""}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Atualizar
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
