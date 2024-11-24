// src/components/RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = () => {
  // Initialize form data state with useState for username, email, and password
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Initialize errors state with useState for each field (username, email, password)
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle changes to input fields and update the corresponding form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, // Keep existing form data
      [name]: value // Update the specific field (username, email, or password)
    });
  };

  // Basic validation logic to check for empty fields and other requirements
  const validateForm = () => {
    const newErrors = { username: '', email: '', password: '' };

    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors); // Update the errors state with the new error messages
    return Object.values(newErrors).every((error) => error === ''); // Returns true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission

    if (validateForm()) {
      // If form is valid, simulate form submission (e.g., API call)
      console.log('Form submitted:', formData);
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Input Field */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
          />
          {/* Display username validation error */}
          {errors.username && <div style={{ color: 'red' }}>{errors.username}</div>}
        </div>

        {/* Email Input Field */}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {/* Display email validation error */}
          {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </div>

        {/* Password Input Field */}
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
          {/* Display password validation error */}
          {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
        </div>

        {/* Submit Button */}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;

