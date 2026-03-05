import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
} from "@mui/material";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};

const emailRegex = /^[A-Za-z][A-Za-z0-9]*([._][A-Za-z0-9]+)*@(cumail\.in|cuchd\.in|google\.in|google\.uk|google\.eu|google\.ca|google\.us|cu\.edu\.in|punjab\.gov\.in)$/;
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email =
        "Enter valid email (must contain @ and end with .com, .in or country code)";
    }

    const passwordRegex = /^[A-Z](?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{4,}$/;

    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      tempErrors.password =
        "Password must start with Capital letter ,include one small alphabet, include one number, one special character, and be at least 5 characters long";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful! .Please leave it open in the background and open a new window to continue.");
    }
  };

  return (
    <Container maxWidth="xs" style={{ marginTop: "100px" }}>
      <Paper elevation={4} style={{ padding: "40px" }}>
        <Typography variant="h5" align="center" gutterBottom>
          Login Form
        </Typography>

        <form onSubmit={handleSubmit}>
          
          <TextField
            fullWidth
            margin="normal"
            label="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />

          
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />

          
          <Button
            fullWidth
            type="submit"
            variant="contained"
            style={{ marginTop: "20px" }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default App;