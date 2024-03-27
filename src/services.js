import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

// Função para obter contatos
async function getContacts() {
  try {
    const response = await axiosInstance.get("/contacts");
    // Aqui você pode lidar com a resposta como desejar
    console.log(response.data);
    return response.data; // Retornar os dados se necessário
  } catch (error) {
    console.error("Erro ao obter contatos:", error);
    throw error; // Lançar o erro novamente para que seja tratado onde a função é chamada
  }
}

// Exportar a função e o objeto api
export const api = {
  get: axiosInstance.get,
  post: axiosInstance.post,
};

export { getContacts };
