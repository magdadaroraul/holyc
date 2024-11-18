import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Registration = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!user.firstName || !user.lastName || !user.age) {
      alert("Please fill in all fields.");
      return;
    }

    if (user.age <= 0 || isNaN(user.age)) {
      alert("Please enter a valid age.");
      return;
    }

    console.log('User registered:', user);
    // Call an API or handle form data here

    // Reset the form after submission
    setUser({
      firstName: '',
      lastName: '',
      age: ''
    });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              name="firstName"
              value={user.firstName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={user.lastName}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridAge">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              name="age"
              value={user.age}
              onChange={handleInputChange}
              required
              min="1"  // Ensure age is a positive number
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default Registration;
