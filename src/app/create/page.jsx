"use client"
import { Box, Container, CardMedia, Typography, IconButton } from "@mui/material";
import CreateMovieForm from "../../components/form";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';
import { createMovieContainer } from "@/styles/create.style";
import { publicationMovieBox } from "@/styles/create.style";
import { headerPublicationBox } from "@/styles/create.style";
import { ContentBox } from "@/styles/create.style";

export default function Moviess() {
  const { movies, loading } = useContext(MovieContext);

  const handleDelete = async (id) => {

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


  return (
    <>

      <Box sx={
        createMovieContainer}>
        <CreateMovieForm />

        <Box sx={publicationMovieBox}>
          <Box sx={headerPublicationBox}>
            <h1>Cadastrados</h1>
            <IconButton onClick={() => window.location.reload()}>
              <SyncIcon />
            </IconButton>
          </Box>
          <ContentBox>
            {loading ? "CARREGANDO..." : loading}
            {movies.map((item) => {
              return (
                <Container key={item.id} sx={{ display: 'flex', gap: 2, marginBottom: '2px', marginTop: '3px' }}>
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt="Descrição da imagem"
                    sx={{
                      height: 70,
                      width: 60,
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.year}|{item.category}
                    </Typography>
                  </Box>

                  <IconButton onClick={() => handleDelete(item.id)} aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </Container>
              )
            })}
          </ContentBox>

        </Box>
      </Box>

    </>
  )
}

