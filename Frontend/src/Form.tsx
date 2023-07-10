import React ,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Grid, colors ,FormHelperText} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box, { BoxProps } from '@mui/material/Box';
import './Style/Form.css'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { baseURL } from './utils/constant'
import { Request, Response } from 'express';
const theme = createTheme({
  palette: {
    primary: {
      main: '#8cc641',
    },
    success:{
      main:'#000'
    },
    neutral: {
      main: '#fff',
      contrastText: '#c2caec',
    },  
    green: {
      main: '#000',
      contrastText: '#000',
    }
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
    green: Palette['success'];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
    green?: PaletteOptions['success'];
  }
}
const RegisterForm = () => {
  const [inputName,setInputName]=useState("")
  const [inputEmail,setInputEmail]=useState("")
  const [inputAdresse,setInputAdresse]=useState("")
  const [inputTel,setInputTel]=useState("")
  const [inputImage,setInputImage]=useState("")
  const [inputCodePostal,setInputCodePostal]=useState("")
  const [selectedImage, setSelectedImage] = useState("null");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateName = (name: string) => {
    if (!name || !name.trim()) {
      return 'Ce champ est requis';
    }
    return '';
  };
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const nameError = validateName(inputName);
    if (!nameError) {
      console.log('Form soumis :) ');
    } else {
      setErrors({
        inputName: nameError,
      });
      console.log('Le Form contient des erreurs :( ');
    }
  };  

  return (
    <ThemeProvider theme={theme}>    
    <form onSubmit={handleSubmit}>
      <Box className="FormBox" >  
        <TextField 
          label="Nom"
          sx={{ m: 1, width: '100%'}}
          value={inputName}
          name="inputName"
          onChange={(e) => setInputName(e.target.value)} 
        />
        {errors.inputName && (
          <FormHelperText sx={{ color: 'red' }}>{errors.inputName}</FormHelperText>
        )}
        <Button type='submit' variant="contained" color='primary' sx={{textTransform:'capitalize'}}>Envoyer</Button>
      </ Box>
    </form>
    </ThemeProvider>
  );
};
export default RegisterForm;
