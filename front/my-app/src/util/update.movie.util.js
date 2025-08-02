export async function updateMovie(id, data) {

  console.log("updateForm id e data:", id, data)

  try {
    const response = await fetch(`http://localhost:3001/movie/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        category: data.category,
        year: data.year,
        description: data.description,
        movieUrl: data.movieUrl,
        imageUrl: data.imageUrl,

      }),
    });

    if (!response.ok) {
      throw new Error(`formUtil - Erro do servidor: ${response.status}`);
    }

    const text = await response.text();

    if (text) {
      const result = JSON.parse(text);
      console.log("resposta da api:", result);
    } else {
      console.warn("resposta vazia api");
    }
  } catch (error) {
    console.error("erro ao fzer requisicao:", error);
  }


}