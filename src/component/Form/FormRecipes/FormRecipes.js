import React from "react";
import { useFormik } from "formik";

import styles from "./FormRecipes.module.scss";

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.message) {
    errors.message = "Required";
  } else if (values.message.length < 10) {
    errors.lmessage = "Must be 10 characters minimum";
  }

  return errors;
};

const Form = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",      
      email: "",
      message: ""
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <div className={styles.wrapper}> 
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          id="firstName"
          placeholder="Podaj swoje imię"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
        
        <input
          className={styles.input}
          id="email"
          placeholder="Podaj swój adres e-mail"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
        <textarea
          className={styles.textarea}
          id="message"
          placeholder="Podaj składniki i sposób wykonania"
          type="textarea"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.errors.message ? <div>{formik.errors.message}</div> : null}
        <button type="submit" className={styles.button}>
          Wyślij przepis
        </button>
      </form>
    </div>
  );
};

export default Form;
