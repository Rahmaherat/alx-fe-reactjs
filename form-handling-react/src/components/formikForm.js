import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik'; // Import Formik, Field, Form, and ErrorMessage
import * as Yup from 'yup'; // Import Yup for validation

// Define Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters long')
});

const FormikForm = () => {
  // Handle form submission
  const handleSubmit = (values) => {
    console.log('Form data:', values);
  };

  return (
    <div>
      <h2>Register</h2>
      {/* Formik setup */}
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema} // Yup validation schema
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
            />
            {/* Displaying error for username */}
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            {/* Displaying error for email */}
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
            />
            {/* Displaying error for password */}
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;

