import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data (example: session or local storage)
    localStorage.removeItem("userToken"); // Example key, adjust as needed
    localStorage.removeItem("userData");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div style={{marginLeft: '300px'}}>
      <h1>Are you sure you want to log out?</h1>
      <Button style={{marginLeft: '250px'}} variant="primary" type="submit"
        onClick={handleLogout}
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
