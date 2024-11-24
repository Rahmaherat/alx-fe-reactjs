import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const FormikForm = () => {
  // Form submission handler
  const handleSubmit = (values) => {
    console.log('User registered:', values);
    // Here, you can replace the console log with an actual API call
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        {/* Username field */}
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" component="div" className="error" />
        </div>

        {/* Email field */}
        <div>
          <label htmlFor="email">Email</label>
          <Field
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div" className="error" />
        </div>

        {/* Password field */}
        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" className="error" />
        </div>

        {/* Submit button */}
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;

