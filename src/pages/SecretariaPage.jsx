import SecretariaDetail from "../components/SecretariaDetail";
import SecretariaEditForm from "../components/SecretariaEditForm";
import { useState } from "react";
import { Button } from "@mui/material";

export default function SecretariaPage() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div>
      <h1>Detalhes da Secretaria</h1>
      {editMode ? (
        <SecretariaEditForm />
      ) : (
        <>
          <SecretariaDetail />
          <Button variant="outlined" onClick={() => setEditMode(true)}>Editar</Button>
        </>
      )}
    </div>
  );
}
