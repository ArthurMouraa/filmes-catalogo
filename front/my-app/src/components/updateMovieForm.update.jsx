import { useEffect, useState } from "react";
import { alertStyles, buttonEnviar, buttonImageStyles, ButtonStyle, titleStyles } from "@/styles/form.create.styles";
import { BoxStyles } from "@/styles/form.create.styles";
import { WidgetCloudinary } from "@/util/widget.cloudinary.util";
import { postForm } from "@/util/post.form.util";
import { useForm, Controller, reset } from "react-hook-form";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Alert from '@mui/material/Alert';
import { Box, Select, MenuItem, FormControl, InputLabel, Button, TextField } from "@mui/material";
import { updateMovie } from "@/util/update.movie.util";

export default function UpdateMovieForm({ movie }) {

  const [reloading, setReloading] = useState(false);

  console.log("Movie que ta chegando no form: ", movie)
  useEffect(() => {
    WidgetCloudinary()
  }, [])


  const abrirWidget = () => {
    if (!window.cloudinary) {
      console.log("cloudinary não carregou.");
      return;
    }
  }

  const myForm = useForm();

  useEffect(() => {
    if (movie) {
      myForm.reset({
        title: movie.title,
        description: movie.description,
        year: movie.year,
        category: movie.category
      });
    }
  }, [movie]);

  console.log(`O form = ${myForm}`)


  const onSubmit = async (data) => {
    console.log("Foi chamado")
    console.log(data)
    const response = updateMovie(movie.id, data);

    setReloading(!reloading);

    myForm.reset()
  }


  const openWidget = (tipo) => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "process.env.CLOUDINARY_CLOUD_NAME",
        uploadPreset: "process.env.CLOUDINARY_PRESET",
        resourceType: tipo,
      },
      (error, result) => {
        if (!error && result.event === "success") {
          const url = result.info.secure_url;

          if (tipo === "image") {
            myForm.setValue("imageUrl", url);
          } else {
            myForm.setValue("movieUrl", url);
          }

          console.log("Upload concluído:", url);
        }
      }
    );

    widget.open();
  };

  return (
    <>
      <Box
        component="form"
        onSubmit={myForm.handleSubmit(onSubmit)}
        sx={BoxStyles}
      >
        <div style={titleStyles}>
          <h1>Edite o filme</h1>
        </div>
        <Controller
          name="imageUrl"
          control={myForm.control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <>
              <input type="hidden" {...field} />
            </>
          )}
        />
        <Controller
          name="movieUrl"
          control={myForm.control}
          defaultValue=""
          render={({ field, fieldState }) => (
            <>
              <input type="hidden" {...field} />
            </>
          )}
        />
        <Controller
          name="title"
          control={myForm.control}
          defaultValue=""
          render={({ field }) => (
            <TextField sx={{ background: "white" }}
              {...field}
              label="Título"
              fullWidth
            />
          )}
        />
        <Controller
          name="category"
          control={myForm.control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <FormControl fullWidth required>
              <InputLabel id="genero-label">Gênero</InputLabel>
              <Select sx={{ background: "white" }}
                {...field}
                labelId="genero-label"
                label="Gênero"
              >
                <MenuItem value="Ação">Ação</MenuItem>
                <MenuItem value="Comédia">Comédia</MenuItem>
                <MenuItem value="Terror">Terror</MenuItem>
                <MenuItem value="Drama">Drama</MenuItem>
                <MenuItem value="Animação">Animação</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="year"
          control={myForm.control}
          defaultValue=""
          render={({ field }) => (
            <TextField sx={{ background: "white" }}
              {...field}
              label="Ano de lançamento"
              fullWidth
            />
          )}
        />

        <Controller
          name="description"
          control={myForm.control}
          defaultValue=""
          render={({ field }) => (
            <TextField sx={{ background: "white" }}
              {...field}
              label="Descrição"
              fullWidth
            />
          )}
        />
        <Button onClick={() => openWidget("image")} variant="outlined" sx={ButtonStyle}>
          <AddPhotoAlternateIcon sx={buttonImageStyles} />
          imagem
        </Button>
        <Button onClick={() => openWidget("video")} variant="outlined" sx={ButtonStyle}>
          <VideoCameraBackIcon sx={{ fontSize: "50px" }} />
          Video
        </Button>
        <Button type="submit" variant="contained" sx={buttonEnviar}>
          Enviar
          {reloading && (
            <Alert
              severity="success"
              sx={alertStyles}
            >
              Filme atualizado com sucesso!
            </Alert>
          )}
        </Button>
      </Box>
    </>)
}