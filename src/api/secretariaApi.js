import axios from "axios";

const API_URL = "http://localhost:8080/api/secretarias";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;

      if (status === 400) {
        return Promise.reject({ type: "validation", data });
      }
      if (status === 404) {
        return Promise.reject({ type: "not_found", message: "Secretaria não encontrada" });
      }
      if (status === 409) {
        return Promise.reject({ type: "conflict", message: "E-mail já cadastrado" });
      }
    }
    return Promise.reject({ type: "default", message: "Erro inesperado. Tente novamente mais tarde." });
  }
);

export const listarSecretarias = (page = 0, size = 10, sort = "nome") =>
  axios.get(`${API_URL}?page=${page}&size=${size}&sort=${sort}`);


export const buscarSecretariaPorId = (id) => {
  if (!id) {
    return Promise.reject({ type: "validation", data: { id: "ID da secretaria é obrigatório" } });
  }
  return api.get(`/${id}`);
};

export const buscarSecretariaPorEmail = (email) =>
  api.get(`/email/${email}`);

export const criarSecretaria = (secretaria) =>
  api.post("", secretaria);

export const atualizarSecretaria = (id, secretaria) => {
  if (!id) {
    return Promise.reject({ type: "validation", data: { id: "ID da secretaria é obrigatório" } });
  }
  return api.put(`/${id}`, secretaria);
};

export const deletarSecretaria = (id) => {
  if (!id) {
    return Promise.reject({ type: "validation", data: { id: "ID da secretaria é obrigatório" } });
  }
  return api.delete(`/${id}`);
};
