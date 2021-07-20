import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';

export const Signin = () => {
  const validate = Yup.object({    
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),      
    oldPassword: Yup.string()
      .required('Old password is required'),
    newPassword: Yup.string()
     .notOneOf([Yup.ref('oldPassword'), null], 'Password should not be same')
     .min(6, 'New Password must be at least 6 charaters')
     .required('New password is required'),
  })
  return (
    <div>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validate}
      onSubmit={value => {
        console.log(value)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />            
            <button className="btn btn-dark mt-3" type="submit">Register</button>
            <div></div>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
    <Formik
      initialPass={{
        oldPassword: '',
        newPassword: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Change Your Password</h1>          
          <Form>            
            <TextField label="Old password" name="oldPassword" type="password" />
            <TextField label="New Password" name="newPassword" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Change</button>
            <div></div>
            <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
          </Form>
        </div>
      )}
    </Formik>
    </div>
  )
}