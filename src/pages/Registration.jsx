import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      alert(Object.values(errors).join('\n'));
      return;
    }

    console.log('Form data submitted:', formData);

    // Reset the form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div style={{ marginLeft: '650px', marginTop: '50px', maxWidth: '400px'}}>
      <h1>Registration Form</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="">
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="">
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label></Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <p style={{textAlign: 'center'}} className="mt-4">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Button variant="primary" type="submit" className="mt-2 w-100">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Register;
