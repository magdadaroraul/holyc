import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  const handleGoToRegistration = () => {
    navigate('/registration');  // Navigate to the registration page
  };


  return (
    <div style={{marginLeft: '650px'}}>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}  />
        </Form.Group>

        <Button variant="primary" type="submit" className='me-5'>
          Login
        </Button>

        <Button variant="primary" type="button" onClick={handleGoToRegistration}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Login;