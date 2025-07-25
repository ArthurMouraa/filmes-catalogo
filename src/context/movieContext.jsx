'use client'
import { createContext, useState } from "react";
import { useEffect } from "react";

export const MovieContext = createContext({})



export default function MovieProvider({ children }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const request = await fetch("http://localhost:3001/movie/movies");
        console.log(request)
        const movies = await request.json();
        console.log("Olha o movie:", movies.data);
        if (movies != null) {
          setMovies(movies.data)
        }
      } catch (error) {

        throw new Error(`Deu erro ${error}`)

      } finally {
        setLoading(false)
      }
    }
    fetchMovies();
  }, [])


  return (
    <>
      <MovieContext.Provider value={{ movies, setMovies, loading}}>
        {children}
      </MovieContext.Provider>
    </>)


} 