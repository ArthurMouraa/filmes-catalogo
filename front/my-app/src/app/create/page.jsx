'use client'

import { useContext, useState } from "react";
import { MovieContext } from "@/Context/movie.context";
import { Box, Button, colors } from "@mui/material";
import { boxModal, cardMediaStyles, createMovieContainer } from "@/styles/create.page.styles";
import CreateMovieForm from "@/components/createMovieForm.create"
import { publicationMovieBox } from "@/styles/create.page.styles";
import { headerPublicationBox } from "@/styles/create.page.styles";
import IconButton from "@mui/material/IconButton";
import SyncIcon from '@mui/icons-material/Sync';
import { ContentBox } from "@/styles/create.page.styles";
import Container from '@mui/material/Container';
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { Modal } from "@mui/material";
import { handleDelete } from "@/util/delete.movie.util";
import UpdateMovieForm from "@/components/updateMovieForm.update";
import Backdrop from "@mui/material/Backdrop";
import { containerStyles } from "@/styles/create.page.styles";
import { red } from "@mui/material/colors";
export default function Create() {
  const { movies, loading } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <>

      <Box sx={
        createMovieContainer}>
        <CreateMovieForm />

        <Box sx={publicationMovieBox} >
          <Box sx={headerPublicationBox}>
            <h1>Cadastrados</h1>
            <IconButton onClick={() => window.location.reload()}>
              <SyncIcon />
            </IconButton>
          </Box>
          <ContentBox >
            {loading ? "CARREGANDO..." : loading}
            {movies.map((item) => {
              return (

                <Container key={item.id} sx={containerStyles}>
                  <CardMedia
                    component="img"
                    image={item.imageUrl}
                    alt={item.description}
                    sx={cardMediaStyles}
                  />
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography fontWeight="bold">
                      {item.title}
                    </Typography>
                    <Typography>
                      {item.year}|{item.category}
                    </Typography>
                  </Box>
                  <IconButton onClick={() => handleDelete(item.id)} aria-label="delete" size="small" sx={{ color: 'red' }}>
                    <DeleteIcon fontSize="inherit" color="red" />
                  </IconButton>

                  <Button onClick={() => setSelectedMovie(item)} sx={{ height: '20px', width: '20px', fontSize: '10px', color: 'orange' }}>
                    editar
                  </Button>
                </Container>

              )
            })}
          </ContentBox>
          <Modal open={Boolean(selectedMovie)} onClose={() => setSelectedMovie(null)}
            slots={{
              backdrop: Backdrop,
            }}
            slotProps={{
              backdrop: {
                sx: {
                  backgroundColor: 'transparent',
                },
              },
            }}>
            <Box sx={boxModal}>
              <UpdateMovieForm movie={selectedMovie} />
            </Box>
          </Modal>

          {console.log("Filme selecionado: ", selectedMovie)}

        </Box>
      </Box>

    </>

  )

}