import React from 'react';
import ReactDOM from 'react-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import database, { firebase } from '../firebase/firebase';

const Formik = ({
  values,
  errors,
  touched,
  isSubmitting
}) => (
    <div className='form__container'>
      <Form className='form__card card p-3 mb-5 rounded'>
        <div className='form__input'>
          { touched.name && errors.name && <p className='form__warning'>{errors.name}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='text' name='name' placeholder='Name'/>
        </div>
        <div className='form__input'>
          { touched.surname && errors.surname && <p className='form__warning'>{errors.surname}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='text' name='surname' placeholder='Surname'/>
        </div>
        <div className='form__input'>
          { touched.address && errors.address && <p className='form__warning'>{errors.address}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='text' name='address' placeholder='Address'/>
        </div>
        <div className='form__input'>
          { touched.phone && errors.phone && <p className='form__warning'>{errors.phone}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='text' name='phone' placeholder='Phone number'/>
        </div>
        <div className='form__input'>
          { touched.email && errors.email && <p className='form__warning'>{errors.email}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='email' name='email' placeholder='Email'/>
        </div>
        <div className='form__input'>
          { touched.password && errors.password && <p className='form__warning'>{errors.password}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='password' name='password' placeholder='Password'/>
        </div>
        <div className='form__input'>
          { touched.passwordConfirmation && errors.passwordConfirmation && <p className='form__warning'>{errors.passwordConfirmation}</p>}
          <Field className='form-control' aria-describedby='basic-addon1' type='password' name='passwordConfirmation' placeholder='Password confirmation'/>
        </div>
        <button type='submit' className='form__button form__button--margin-bottom btn  btn-lg btn-primary' disabled={isSubmitting}>Register</button>
      </Form>
    </div>
)

const RegistrationForm = withFormik({
  mapPropsToValues({ name, surname, address, phone, email, password, passwordConfirmation }) {
    return {
      name: name || '',
      surname: surname ||'',
      address: address || '',
      phone: phone || '',
      email: email || '',
      password: password ||'',
      passwordConfirmation: passwordConfirmation || ''
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required field.'),
    surname: Yup.string().required('Surname is required field.'),
    address: Yup.string().required('Address is required field.'),
    phone: Yup.number().typeError('Incorrect phone number.').required('Phone is required field.'),
    email: Yup.string().email('Email not valid.').required('Email is required field.'),
    password: Yup.string().min(8, 'Password must be 8 characters or longer.').required('Password is required field.'),
    passwordConfirmation: Yup.string().min(8, 'Password must be 8 characters or longer.').oneOf([Yup.ref('password'), null],'Password confirmation must match your password.').required('Password confirmation is required field.')
  }),
  handleSubmit(values, {resetForm, setErrors, setSubmitting}) {
    firebase.auth().createUserWithEmailAndPassword(values.email, values.password).then((response) => {
      database.ref(`users/${response.user.uid}`).set(values).then(() => {
      }).catch((error) => {
        console.log('Failed to save data', error);
      });
      resetForm();
      setSubmitting(false);
    }).catch((error) => {
      const errorCode = error.code;
      console.log('error', errorCode);
      setErrors({email:'Email is already taken.'});
      setSubmitting(false);
    });
  }
})(Formik)

export default RegistrationForm;
