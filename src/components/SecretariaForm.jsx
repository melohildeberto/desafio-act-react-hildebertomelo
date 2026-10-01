import { useState } from "react";
import { criarSecretaria } from "../api/secretariaApi";
import { TextField, Button, Box } from "@mui/material";

export default function SecretariaForm({ onCreated }) {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    criarSecretaria(form).then((res) => {
      onCreated(res.data);
      setForm({ nome: "", email: "", telefone: "" });
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Nome" name="nome" value={form.nome} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Telefone" name="telefone" value={form.telefone} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Salvar</Button>
    </Box>
  );
}
