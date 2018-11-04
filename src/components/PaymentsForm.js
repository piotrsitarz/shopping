import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import { history } from "../routers/AppRouter";

const Formik = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
  <div className="form__container">
    <div className="payment__title">
      <img className="payment__img" src="https://image.flaticon.com/icons/svg/1086/1086741.svg" alt="payment" />
      <h1>Payment Details:</h1>
    </div>
    <Form className="form__card card p-3 mb-5 rounded">
      <div className="form__input">
        { touched.name && errors.name && <p className="form__warning">{errors.name}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="text" name="name" placeholder="Name of card holder"/>
      </div>
      <div className="form__input">
        { touched.surname && errors.surname && <p className="form__warning">{errors.surname}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="text" name="surname" placeholder="Surname of card holder"/>
      </div>

      <div className="form__input">
        { touched.number && errors.number && <p className="form__warning">{errors.number}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="number" name="number" placeholder="Card number"/>
      </div>
      <div className="form__input">
        { touched.expiry && errors.expiry && <p className="form__warning">{errors.expiry}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="text" name="expiry" placeholder="Card expiry date"/>
      </div>

      <div className="form__input">
        { touched.cvv && errors.cvv && <p className="form__warning">{errors.cvv}</p>}
        <Field className="form-control" aria-describedby="basic-addon1" type="text" name="cvv" placeholder="CVV"/>
      </div>
      <button type="submit" className="form__button form__button--margin-top btn btn-primary btn-lg" disabled={isSubmitting}>Confirm Payment</button>
    </Form>
  </div>
)

const PaymentsForm = withFormik({
  mapPropsToValues({ name, surname, number, expiry, cvv }) {
    return {
      name: name || "",
      surname: surname ||"",
      number: number || "",
      expiry: expiry || "",
      cvv: cvv || ""
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required field."),
    surname: Yup.string().required("Surname is required field."),
    number: Yup.number().typeError("Incorrect card number.").required("Card number is required field."),
    expiry: Yup.string().required("Card expiry date is required field."),
    cvv: Yup.number().typeError("Incorrect cvv number.").required("CVV is required field.")
  }),
  handleSubmit() {
    history.push("/summary");
  }
})(Formik)

export default PaymentsForm;
