'use client'
import "./globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navegation from "@/components/navegation.header.";
import MovieProvider from "@/Context/movie.context";

const theme = createTheme();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MovieProvider>
          <ThemeProvider theme={theme}>
            <Navegation />
            {children}
          </ThemeProvider>
        </MovieProvider>
      </body>
    </html>
  );
}
