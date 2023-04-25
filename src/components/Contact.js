import { Button, CardContent, IconButton, Link, Paper, Radio, TextField, Typography, makeStyles } from '@material-ui/core';
import { GitHub, LinkedIn, WhatsApp } from '@material-ui/icons';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';



const Contact = ({title, dark, id}) => {
  
    const classes = useStyles();

    const [value, setValue] = useState('Say Hi');
    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        service: '',
        budget: '',
        message: ''
      },
      validationSchema: Yup.object({
         name: Yup.string().required('Debes ingresar un Nombre'),
         email: Yup.string().email('Email Invalido').required('Ingresa un email'),
         message: Yup.string().required('Ingresa un mensaje')
      }),
      onSubmit: valores => {
        console.log(valores)
        const {name, email, service, budget, message} = valores;
         emailjs.send('service_va0bxm7','template_hou86wt',{
          name,
          service: service ? service : 'don`t service',
          message,
          budget: budget ? budget : 'Don`t budget',
          email
         },'WWEiX63WZDJDNz2Cr')
         .then(response => 
          Swal.fire(
            'Sent!',
             `Message sent successfully, ${response.text}!!`,
            'success'
          )
          )
         .catch(error => 
             Swal.fire(
              'Error',
              `${error.message}`,
              'error'
             )
          )
      }
    })
  

    const validateEmail = (email) => {
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      return regex.test(email);
    }

    const handleChange = (e) => {
        setValue(e.target.value)
    }



    return ( 
        <div className={`${classes.section} ${(dark && classes.sectiondark) || classes.sectionWhite}`}>
          <div className={classes.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
            <Paper className={classes.root}>
               <div className={classes.titleAndChoices}>
                  <Typography variant='h5'>
                     CONTACT ME
                  </Typography>
                  <div className={classes.choices}>
                     <span>Say hello</span>
                     <Radio
                        value='Say Hi'
                        checked={value=== 'Say Hi'}
                        color='primary'
                        onChange={handleChange}
                     />
                      <span>Get a Quote</span>
                     <Radio
                        value='Get a'
                        checked={value=== 'Get a'}
                        color='primary'
                        onChange={handleChange}
                     />
                  </div>
                  <form className={classes.form} onSubmit={formik.handleSubmit} >
                     <TextField 
                         label='Your name' 
                         type='text'
                         id='name'
                         textStyle={{
                          color: '#fff',
                        }}
                         variant='outlined'
                         className={classes.text}
                         onChange={formik.handleChange}
                         value={formik.values.name}  
                         error={formik.errors.name}
                         helperText={formik.errors.name}
                     />
                     <TextField 
                         label='Your e-mail' 
                         type='email'
                         id='email'
                         variant='outlined'                         
                         className={classes.text}
                         onChange={formik.handleChange} 
                         value={formik.values.email} 
                         error={formik.errors.email}
                         helperText={formik.errors.email}
                     />
                     {
                      value === 'Get a' ? (
                         <>
                            <TextField 
                              label='Needed Services' 
                              type='text'
                              id='service'
                              variant='outlined'
                              className={classes.text}
                              onChange={formik.handleChange} 
                              value={formik.values.service} 
                            />
                            <TextField 
                              label='Estimated Budget' 
                              type='text'
                              id='budget'
                              variant='outlined'
                              className={classes.text}
                              onChange={formik.handleChange}  
                              value={formik.values.budget}
                            />
                         </>
                      ) : null
                     }
                     <TextField 
                        label='Write a message' 
                        type='text'
                        id='message'
                        variant='outlined'                        
                        className={classes.text}
                        onChange={formik.handleChange}  
                        value={formik.values.message}
                        error={formik.errors.message}
                        helperText={formik.errors.message}
                      />
                      
                       <Button variant='contained' type='submit'>
                        Submit
                      </Button>
                  </form>
                 
               </div>
            </Paper>
            <CardContent className={classes.cardIcon}>
              <IconButton>
                  <Link href='https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252' target='_blank' rel='noopener noreferrer'>
                    <LinkedIn className={classes.icon}/>
                  </Link>
              </IconButton>
              <IconButton>
                  <Link href='https://wa.me/573004582128?text=Bienvenido%20Soy%20full%20stack%20%20web%20developer' target='_blank' rel='noopener noreferrer'>
                    <WhatsApp className={classes.icon}/>
                  </Link>
              </IconButton>
              <IconButton>
                  <Link href='https://github.com/Oskarp88' target='_blank' rel='noopener noreferrer'>
                    <GitHub className={classes.icon}/>
                  </Link>
              </IconButton>
            </CardContent>
           </div>
        </div>
     );
}

const useStyles = makeStyles((theme) => ({
    section: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    sectiondark: {
      background: '#333',
      color: '#fff'
    },
    sectionWhite:{
      background: "linear-gradient(15deg, #13547a 5%, #fff 70%)"
    },
    sectioncontent:{
      maxWidth: "80vw",
      "& h3":{
        fontSize: "2rem",
        margin: "8px auto",
      }      
    },
    root:{
      marginTop: theme.spacing(5),
      background: "linear-gradient(to top, #fff1eb 40%, #1f6f78 80%)",
      color: "#fff",
      fontSize: "1.2rem",
      maxWidth: "500px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: theme.spacing(4),
      "& button": {
        backgroundColor: "#1f6f78",
        color: "#fff",
        fontWeight: 900,
        fontSize: "1.2rem",
        marginTop: theme.spacing(4)
      },
      "& button:hover": {
        backgroundColor: "#eaf6f6", 
        color: "#1f6f78",
      }
    },
    titleAndChoices:{
      "& h5":{
        marginTop: theme.spacing(4),
      }
    },
    form: {      
      display: "flex",
      flexDirection: "column", 
      "& input":{
        marginBottom: theme.spacing(2),
               
      }
    },
    text:{
      marginTop: theme.spacing(2),
      color: '#fff'
    },
    cardIcon: {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center'
    },
    icon: {
      color: '#fff',
      marginLeft: '1rem',
    }
  }))
export default Contact;