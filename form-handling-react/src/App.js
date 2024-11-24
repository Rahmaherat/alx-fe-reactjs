// src/App.js
import React from 'react';
import RegistrationForm from './components/RegistrationForm';  // Controlled Components form
import FormikForm from './components/FormikForm';  // Formik form

function App() {
  return (
    <div className="App">
      <h1>User Registration</h1>
      {/* Uncomment the form you want to use */}
      {/* Use Controlled Components form */}
      {/* <RegistrationForm /> */}
      {/* Use Formik form */}
      <FormikForm />
    </div>
  );
}

export default App;
