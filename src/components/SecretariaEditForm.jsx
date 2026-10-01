// src/components/SecretariaEditForm.jsx
import { useState, useEffect } from "react";
import { atualizarSecretaria, buscarSecretariaPorId } from "../api/secretariaApi";
import { TextField, Button, Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";

export default function SecretariaEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  useEffect(() => {
    buscarSecretariaPorId(id).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    atualizarSecretaria(id, form).then(() => {
      navigate(`/secretarias/${id}`); // redireciona para detalhes após salvar
    });
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField label="Nome" name="nome" value={form.nome} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Email" name="email" value={form.email} onChange={handleChange} fullWidth margin="normal" />
      <TextField label="Telefone" name="telefone" value={form.telefone || ""} onChange={handleChange} fullWidth margin="normal" />
      <Button type="submit" variant="contained" color="primary">Atualizar</Button>
    </Box>
  );
}
