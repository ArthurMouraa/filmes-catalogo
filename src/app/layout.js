'use client'
import MovieProvider from '@/context/movieContext';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavBar from "@/components/header";

const theme = createTheme();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, boxSizing: 'border-box', backgroundColor: "rgba(255, 255, 255, 0.9)" }}>
        <MovieProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
          </ThemeProvider>
        </MovieProvider>
      </body>
    </html>
  );
}
