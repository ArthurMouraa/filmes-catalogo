"use client"
import { useContext, useEffect, useState } from "react";
import { MovieContext } from "@/Context/movie.context";
import { MovieContainer } from "@/styles/home.page";
import { MovieCard } from "@/styles/home.page";
import { ContainerButn } from "@/styles/home.page";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { CardMedia } from "@mui/material";



export default function Home() {
  const { movies, loading } = useContext(MovieContext);



  const MovieButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#4B4B4B'

  }))

  return (
    <>
      <MovieContainer >
        {loading ? 'CARREGANDO...' : loading}
        {movies.map((item, index) => (
          <MovieCard key={item.id}>
            <CardMedia
              component="img"
              src={item.imageUrl}
              height="315"
              alt="Descrição da imagem"
            />
            <div>
              <Typography variant='subtitle1' fontWeight="bold " >{item.title}</Typography>
              {loading ? "CARREGANDO..." : loading}
            </div>
            <div>
              <Typography variant='subtitle1' fontWeight="bold">{item.category}</Typography>
              <Typography variant='body2'>{item.year}</Typography>
            </div>
            <ContainerButn>

              <MovieButton key={item.id} onClick={() => window.open(item.movieUrl, '_blank')} variant="contained">

                <Typography fontSize={12}>
                  Assistir Filme
                </Typography>

              </MovieButton>
            </ContainerButn>
          </MovieCard>

        ))}
      </MovieContainer>
    </>
  );
}
