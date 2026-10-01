import SecretariaList from "../components/SecretariaList";
import SecretariaForm from "../components/SecretariaForm";
import { useState } from "react";

export default function SecretariasPage() {
  const [secretarias, setSecretarias] = useState([]);

  const handleCreated = (novaSecretaria) => {
    setSecretarias([...secretarias, novaSecretaria]);
  };

  return (
    <div>
      <h1>Gestão de Secretarias</h1>
      <SecretariaList />
    </div>
  );
}
