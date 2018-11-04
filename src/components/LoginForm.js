import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import database, { firebase } from "../firebase/firebase";
import { getUser } from "../actions/user";

const Formik = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <div className="form__container">
    <Form className="form__card card p-3 mb-5 rounded">
      <div className="form__input">
        { touched.email && errors.email && <p className="form__warning">{errors.email}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="email" name="email" placeholder="Email"/>
      </div>
      <div className="form__input">
        { touched.password && errors.password && <p className="form__warning">{errors.password}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="password" name="password" placeholder="Password"/>
      </div>
      <button type="submit" className="form__button form__button--margin-top btn btn-primary btn-lg" disabled={isSubmitting}>Login</button>
      <Link to="/register">
        <button type="button" className="form__button form__button--margin-bottom btn btn-primary btn-lg" disabled={isSubmitting}>Register Account</button>
      </Link>
    </Form>
  </div>
)

const LoginForm = withFormik({
  mapPropsToValues({ email, password }) {
    return {
      email: email || "",
      password: password ||""
    }
  },
  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid.").required("Email is required field."),
    password: Yup.string().min(8, "Password must be 8 characters or longer.").required("Password is required field.")
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    firebase.auth().signInWithEmailAndPassword(values.email, values.password).then((response) => {
      setSubmitting(false);
      resetForm();
    })
    .catch(function(error) {
      setSubmitting(false);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
  }
})(Formik)

export default LoginForm;
