import { Alert } from "@mui/material";
export async function handleDelete(id) {

  console.log("id: ", id)
  try {
    const response = await fetch(`http://localhost:3001/movie/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Erro ao deletar")
    }
    const sucesso = await response.json();
    if (sucesso) {
      alert('Filme deletado');
      window.location.reload()

    }

  } catch (error) {
    console.log("Erro ao tentar deletar", error)

  }

}