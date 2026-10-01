// src/api/secretariaApi.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/secretarias";

export const listarSecretarias = (page = 0, size = 10, sort = "nome") =>
  axios.get(`${API_URL}?page=${page}&size=${size}&sort=${sort}`);

export const buscarSecretariaPorId = (id) =>
  axios.get(`${API_URL}/${id}`);

export const buscarSecretariaPorEmail = (email) =>
  axios.get(`${API_URL}/email/${email}`);

export const criarSecretaria = (secretaria) =>
  axios.post(API_URL, secretaria);

export const atualizarSecretaria = (id, secretaria) =>
  axios.put(`${API_URL}/${id}`, secretaria);

export const deletarSecretaria = (id) =>
  axios.delete(`${API_URL}/${id}`);
