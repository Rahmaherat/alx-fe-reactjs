import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'; // Make sure Yup is imported

// Define Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string()         // Specifies that 'username' should be a string
    .required('Username is required')  // Mark it as required
    .min(3, 'Username must be at least 3 characters long'), // Minimum length of 3

  email: Yup.string()             // Specifies that 'email' should be a string
    .email('Invalid email address')  // Validate email format
    .required('Email is required'), // Mark it as required

  password: Yup.string()         // Specifies that 'password' should be a string
    .required('Password is required')  // Mark it as required
    .min(6, 'Password must be at least 6 characters long') // Minimum length of 6
});

const FormikForm = () => {
  const handleSubmit = (values) => {
    console.log('Form data:', values); // Handle form submission
  };

  return (
    <div>
      <h2>Register</h2>
      <Formik
        initialValues={{
          username: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}  // Pass validation schema to Formik
        onSubmit={handleSubmit}  // Handle form submission
      >
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
            />
            {/* Display error message for username */}
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
            />
            {/* Display error message for email */}
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
            />
            {/* Display error message for password */}
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;


