import { useQuery } from "@tanstack/react-query";
import { listarSecretarias, deletarSecretaria } from "../api/secretariaApi";
import { List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

export default function SecretariaList() {
  const { data, refetch } = useQuery({
    queryKey: ["secretarias"],
    queryFn: () => listarSecretarias().then(res => res.data),
  });

  const handleDelete = (id) => {
    deletarSecretaria(id).then(() => refetch());
  };

  if (!data) return <p>Carregando...</p>;

  return (
    <List>
      {data.content.map((s) => (
        <ListItem
          key={s.id}
          secondaryAction={
            <IconButton edge="end" onClick={() => handleDelete(s.id)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={<Link to={`/secretarias/${s.id}`}>{s.nome}</Link>} secondary={s.email} />
        </ListItem>
      ))}
    </List>
  );
}
