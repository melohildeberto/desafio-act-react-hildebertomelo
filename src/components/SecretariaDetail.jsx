import { useEffect, useState } from "react";
import { buscarSecretariaPorId } from "../api/secretariaApi";
import { useParams } from "react-router-dom";

export default function SecretariaDetail() {
  const { id } = useParams();
  const [secretaria, setSecretaria] = useState(null);

  useEffect(() => {
    buscarSecretariaPorId(id).then((res) => setSecretaria(res.data));
  }, [id]);

  if (!secretaria) return <p>Carregando...</p>;

  return (
    <div>
      <h2>{secretaria.nome}</h2>
      <p>Email: {secretaria.email}</p>
      <p>Telefone: {secretaria.telefone}</p>
      <p>Criado em: {new Date(secretaria.createdAt).toLocaleString()}</p>
      <p>Atualizado em: {new Date(secretaria.updatedAt).toLocaleString()}</p>
    </div>
  );
}
