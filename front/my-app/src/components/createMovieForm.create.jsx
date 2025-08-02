
import { ButtonStyle } from "@/styles/form.create.styles";
import { BoxStyles } from "@/styles/form.create.styles";
import { WidgetCloudinary } from "@/util/widget.cloudinary.util";
import { postForm } from "@/util/post.form.util";
import { useForm, Controller } from "react-hook-form";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import Alert from '@mui/material/Alert';
import { Box, Select, MenuItem, FormControl, InputLabel, Button, TextField } from "@mui/material";
import { useEffect } from "react";

export default function CreateMovieForm() {
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
  console.log(`O form = ${myForm}`)





  const onSubmit = async (data) => {
    console.log("Foi chamado")
    console.log(data)
    const response = postForm(data);
    myForm.reset()
    myForm.reset()
  }


  const openWidget = (tipo) => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "process.env.REACT_APP_CLOUDINARY_CLOUD_NAME",
        uploadPreset: "process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET",
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
        <div style={{
          position: "relative",
          top: 0,
          background: "white",
          padding: "2px",
          zIndex: 10,
          borderBottom: "1px solid #eee"
        }}>
          <h1>Cadastre um filme</h1>
        </div>
        <Controller
          name="imageUrl"
          control={myForm.control}
          defaultValue=""
          rules={{ required: "Selecione uma imagem" }}
          render={({ field, fieldState }) => (
            <>
              <input type="hidden" {...field} />
              {fieldState.error && (
                <Alert severity="error">
                  {fieldState.error.message}
                </Alert>
              )}
            </>
          )}

        />

        <Controller
          name="movieUrl"
          control={myForm.control}
          defaultValue=""
          rules={{ required: "Envie um vídeo antes de continuar" }}
          render={({ field, fieldState }) => (
            <>
              <input type="hidden" {...field} />
              {fieldState.error && (
                <Alert severity="error">
                  Você precisa enviar um vídeo
                </Alert>
              )}
            </>
          )}
        />
        <Controller
          name="title"
          control={myForm.control}
          defaultValue=""
          rules={{ required: "Título é obrigatório" }}
          render={({ field }) => (
            <TextField sx={{ background: "white" }}
              {...field}
              label="Título"
              fullWidth
              required
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
                <MenuItem value="Drama">Animação</MenuItem>
              </Select>
            </FormControl>
          )}
        />
        <Controller
          name="year"
          control={myForm.control}
          defaultValue=""
          rules={{ required: "Ano de lançamento é obrigatório" }}
          render={({ field }) => (
            <TextField sx={{ background: "white" }}
              {...field}
              label="Ano de lançamento"
              fullWidth
              required
            />
          )}
        />
        <Controller
          name="description"
          control={myForm.control}
          defaultValue=""
          rules={{ required: "Ano de lançamento é obrigatório" }}
          render={({ field }) => (
            <TextField sx={{ background: "white" }}
              {...field}
              label="Descrição"
              fullWidth
              required
            />
          )}
        />
        <Button onClick={() => openWidget("image")} variant="outlined" sx={ButtonStyle}>
          <AddPhotoAlternateIcon sx={{ fontSize: "50px", color: "red" }} />
          imagem
        </Button>
        <Button onClick={() => openWidget("video")} variant="outlined" sx={ButtonStyle}>
          <VideoCameraBackIcon sx={{ fontSize: "50px" }} />
          Video
        </Button>
        <Button type="submit" variant="contained" sx={{ marginBottom: '10px' }}>
          Enviar
        </Button>
      </Box>
    </>)
}