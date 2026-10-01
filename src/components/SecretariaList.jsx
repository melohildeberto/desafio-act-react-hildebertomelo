import { useQuery } from "@tanstack/react-query";
import { listarSecretarias, deletarSecretaria } from "../api/secretariaApi";
import {
  List, ListItem, ListItemText, ListItemAvatar, Avatar,
  IconButton, Divider
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeedbackDialog from "./FeedbackDialog";
import ConfirmDialog from "./ConfirmDialog";
import { useSnackbar } from "../context/SnackbarContext";
import SecretariaForm from "./SecretariaForm";

export default function SecretariaList() {
  const { data, refetch } = useQuery({
    queryKey: ["secretarias"],
    queryFn: () => listarSecretarias().then(res => res.data),
  });

  const [dialog, setDialog] = useState({ open: false, title: "", message: "", type: "" });
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const { showMessage } = useSnackbar();

  const handleDeleteClick = (id) => {
    setSelectedId(id);
    setConfirmOpen(true);
  };

  const confirmDelete = () => {
    deletarSecretaria(selectedId)
      .then(() => {
        showMessage("Secretaria excluída!", "success");
        setDialog({ open: true, title: "Sucesso", message: "Secretaria excluída!", type: "success" });
        refetch();
      })
      .catch((err) => {
        const msg = err.type === "validation" ? Object.values(err.data).join(", ") : err.message || "Erro inesperado";
        showMessage(msg, "error");
        setDialog({ open: true, title: "Erro", message: msg, type: "error" });
      })
      .finally(() => setConfirmOpen(false));
  };

  if (!data) return <p>Carregando...</p>;

  return (
    <>
      {/* Passa o refetch como prop */}
      <SecretariaForm onCreated={refetch} />
      

      <List>
        {data.content.map((s, index) => (
          <>
            <ListItem
              key={s.id}
              secondaryAction={
                <IconButton edge="end" color="error" onClick={() => handleDeleteClick(s.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar>{s.nome.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Link to={`/secretarias/${s.id}`}>{s.nome}</Link>}
                secondary={`${s.email} | ${s.telefone || "Sem telefone"}`}
              />
            </ListItem>
            {index < data.content.length - 1 && <Divider />}
          </>
        ))}
      </List>

      <ConfirmDialog
        open={confirmOpen}
        onConfirm={confirmDelete}
        onCancel={() => setConfirmOpen(false)}
      />

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
