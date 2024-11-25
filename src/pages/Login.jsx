import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Added 'Link' import
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock login logic
    if (email === 'admin@example.com' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{ marginLeft: '650px', marginTop: '50px', maxWidth: '400px'}}>
      <h1 className="">Login</h1>
      <Form onSubmit={handleLogin}>
        <Form.Group className="" controlId="email">
          <Form.Label></Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="" controlId="password">
          <Form.Label></Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4 w-100">
          Login
        </Button>

        <p style={{textAlign: 'center'}} className="mt-3">
          Don't have an account? <Link to="/registration">Register</Link>
        </p>
      </Form>
    </div>
  );
};

export default Login;
