import { Button, CardContent, IconButton, Link as MuiLink, Paper, Radio, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { GitHub, LinkedIn, WhatsApp } from "@mui/icons-material";
import style from "./Contact.module.css";

const Contact = ({ title, dark, id }) => {
  const [value, setValue] = useState("Say Hi");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please enter your name"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string().required("Write a short message"),
    }),
    onSubmit: (values, { resetForm }) => {
      const { name, email, service, budget, message } = values;
      emailjs
        .send(
          "service_va0bxm7",
          "template_hou86wt",
          {
            name,
            service: service || "No specific service",
            message,
            budget: budget || "Not specified",
            email,
          },
          "cvVMnID3J4CscZ1ai"
        )
        .then((response) => {
          Swal.fire("Sent!", `Message sent successfully`, "success");
          resetForm();
        })
        .catch((error) => {
          Swal.fire("Error", `${error.message}`, "error");
        });
    },
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <section
      className={`${style.section} ${(dark && style.sectionDark) || style.sectionWhite}`}
      id={id}
    >
      <div className={style.sectionContent}>
        <Typography variant="h3" component="h2" className={style.title}>
          {title}
        </Typography>
        <p className={style.subtitle}>
          Let’s talk about your next product, MVP or feature. I usually reply in less than 24 hours.
        </p>

        <Paper className={style.root} elevation={6}>
          <div className={style.titleAndChoices}>
            <div className={style.formHeader}>
              <Typography variant="h5" className={style.formTitle}>
                Contact me
              </Typography>
              <div className={style.choices}>
                <span>Say hello</span>
                <Radio value="Say Hi" checked={value === "Say Hi"} color="primary" onChange={handleChange} />
                <span>Get a quote</span>
                <Radio value="Get a" checked={value === "Get a"} color="primary" onChange={handleChange} />
              </div>
            </div>

            <form className={style.form} onSubmit={formik.handleSubmit}>
              <TextField
                label="Your name"
                type="text"
                id="name"
                name="name"
                variant="outlined"
                className={style.text}
                onChange={formik.handleChange}
                value={formik.values.name}
                error={Boolean(formik.errors.name && formik.touched.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
              <TextField
                label="Your e-mail"
                type="email"
                id="email"
                name="email"
                variant="outlined"
                className={style.text}
                onChange={formik.handleChange}
                value={formik.values.email}
                error={Boolean(formik.errors.email && formik.touched.email)}
                helperText={formik.touched.email && formik.errors.email}
              />

              {value === "Get a" && (
                <>
                  <TextField
                    label="Needed services"
                    type="text"
                    id="service"
                    name="service"
                    variant="outlined"
                    className={style.text}
                    onChange={formik.handleChange}
                    value={formik.values.service}
                  />
                  <TextField
                    label="Estimated budget"
                    type="text"
                    id="budget"
                    name="budget"
                    variant="outlined"
                    className={style.text}
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                  />
                </>
              )}

              <TextField
                label="Write a message"
                type="text"
                id="message"
                name="message"
                variant="outlined"
                className={style.text}
                multiline
                minRows={3}
                onChange={formik.handleChange}
                value={formik.values.message}
                error={Boolean(formik.errors.message && formik.touched.message)}
                helperText={formik.touched.message && formik.errors.message}
              />

              <Button variant="contained" type="submit" className={style.buttonSubmit}>
                Submit
              </Button>
            </form>
          </div>
        </Paper>

        <CardContent className={style.cardIcon}>
          <IconButton>
            <MuiLink
              href="https://www.linkedin.com/in/oscar-william-burgos-serpa-009675252"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className={style.icon} />
            </MuiLink>
          </IconButton>
          <IconButton>
            <MuiLink
              href="https://wa.me/573004582128?text=Bienvenido%20Soy%20full%20stack%20%20web%20developer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp className={style.icon} />
            </MuiLink>
          </IconButton>
          <IconButton>
            <MuiLink href="https://github.com/Oskarp88" target="_blank" rel="noopener noreferrer">
              <GitHub className={style.icon} />
            </MuiLink>
          </IconButton>
        </CardContent>
      </div>
    </section>
  );
};

export default Contact;
