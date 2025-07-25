
export async function deletarFilme(id){

  const response = await fetch(`http://localhost:3001/movies/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) return false;

  return await response.json();
}
