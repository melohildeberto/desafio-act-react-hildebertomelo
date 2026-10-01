import { useQuery } from "@tanstack/react-query";
import { listarSecretarias, deletarSecretaria } from "../api/secretariaApi";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { useState } from "react";
import FeedbackDialog from "./FeedbackDialog";
import ConfirmDialog from "./ConfirmDialog";
import { useSnackbar } from "../context/SnackbarContext";

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
    if (!selectedId) {
      setDialog({ open: true, title: "Erro", message: "ID da secretaria é obrigatório", type: "error" });
      showMessage("ID da secretaria é obrigatório", "error");
      setConfirmOpen(false);
      return;
    }

    deletarSecretaria(selectedId)
      .then(() => {
        setDialog({ open: true, title: "Sucesso", message: "Secretaria excluída!", type: "success" });
        showMessage("Secretaria excluída!", "success");
        refetch();
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
      })
      .finally(() => setConfirmOpen(false));
  };

  if (!data) return <p>Carregando...</p>;

  return (
    <>
      <List>
        {data.content.map((s) => (
          <ListItem
            key={s.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDeleteClick(s.id)}>
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              primary={<Link to={`/secretarias/${s.id}`}>{s.nome}</Link>}
              secondary={s.email}
            />
          </ListItem>
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
