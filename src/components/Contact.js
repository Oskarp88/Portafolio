import { Button, CardContent, IconButton, Link, Paper, Radio, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import { GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';
import style from './Contact.module.css';



const Contact = ({title, dark, id}) => {

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
         },'cvVMnID3J4CscZ1ai')
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
        <div className={`${style.section} ${(dark && style.sectiondark) || style.sectionWhite}`}>
          <div className={style.sectioncontent} id={id}>
            <Typography variante="h3" component='h3'>
               {title}
            </Typography>
            <Paper className={style.root}>
               <div className={style.titleAndChoices}>
                  <Typography variant='h5'>
                     CONTACT ME
                  </Typography>
                  <div className={style.choices}>
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
                  <form className={style.form} onSubmit={formik.handleSubmit} >
                     <TextField 
                         label='Your name' 
                         type='text'
                         id='name'
                         textStyle={{
                          color: '#fff',
                        }}
                         variant='outlined'
                         className={style.text}
                         onChange={formik.handleChange}
                         value={formik.values.name}  
                         error={formik.errors.name}
                         helperText={formik.errors.name}
                     />
                     <div style={{height: '5px'}}/>
                     <TextField 
                         label='Your e-mail' 
                         type='email'
                         id='email'
                         variant='outlined'                         
                         className={style.text}
                         onChange={formik.handleChange} 
                         value={formik.values.email} 
                         error={formik.errors.email}
                         helperText={formik.errors.email}
                     />
                      <div style={{height: '5px'}}/>
                     {
                      value === 'Get a' ? (
                         <>
                            <TextField 
                              label='Needed Services' 
                              type='text'
                              id='service'
                              variant='outlined'
                              className={style.text}
                              onChange={formik.handleChange} 
                              value={formik.values.service} 
                            />
                            <div style={{height: '5px'}}/>
                            <TextField 
                              label='Estimated Budget' 
                              type='text'
                              id='budget'
                              variant='outlined'
                              className={style.text}
                              onChange={formik.handleChange}  
                              value={formik.values.budget}
                            />
                            <div style={{height: '5px'}}/>
                         </>
                      ) : null
                     }
                     
                     <TextField 
                        label='Write a message' 
                        type='text'
                        id='message'
                        variant='outlined'                        
                        className={style.text}
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
            <CardContent className={style.cardIcon}>
              <IconButton>
                  <Link href='https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252' target='_blank' rel='noopener noreferrer'>
                    <LinkedIn className={style.icon}/>
                  </Link>
              </IconButton>
              <IconButton>
                  <Link href='https://wa.me/573004582128?text=Bienvenido%20Soy%20full%20stack%20%20web%20developer' target='_blank' rel='noopener noreferrer'>
                    <WhatsApp className={style.icon}/>
                  </Link>
              </IconButton>
              <IconButton>
                  <Link href='https://github.com/Oskarp88' target='_blank' rel='noopener noreferrer'>
                    <GitHub className={style.icon}/>
                  </Link>
              </IconButton>
            </CardContent>
           </div>
        </div>
     );
}

export default Contact;