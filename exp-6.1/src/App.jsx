import React, { useState } from "react";
import {Container,Paper,TextField,Typography,Grid,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel,Checkbox,Select,MenuItem,InputLabel,Button,FormGroup,
} from "@mui/material";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    skills: [],
    address: "",
    state: "",
  });

  const states = ["Punjab", "Haryana", "Himachal Pradesh", "Rajasthan", "Uttar Pradesh"];
  const skillsList = ["Java", "React", "Node.js", "Python"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSkillChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setFormData({
        ...formData,
        skills: [...formData.skills, value],
      });
    } else {
      setFormData({
        ...formData,
        skills: formData.skills.filter((skill) => skill !== value),
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
First Name: ${formData.firstName}
Last Name: ${formData.lastName}
DOB: ${formData.dob}
Gender: ${formData.gender}
Skills: ${formData.skills.join(", ")}
Address: ${formData.address}
State: ${formData.state}
    `);
  };

  const handleCancel = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      skills: [],
      address: "",
      state: "",
    });
  };

  return (
  <Container maxWidth="sm" style={{ marginTop: "60px" }}>
    <Paper elevation={4} style={{ padding: "40px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        User Registration Form
      </Typography>

      <form onSubmit={handleSubmit}>
        
        {/* First Name */}
        <TextField
          fullWidth
          margin="normal"
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        {/* Last Name */}
        <TextField
          fullWidth
          margin="normal"
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        {/* DOB */}
        <TextField
          fullWidth
          margin="normal"
          type="date"
          label="Date of Birth"
          name="dob"
          InputLabelProps={{ shrink: true }}
          value={formData.dob}
          onChange={handleChange}
          required
        />

        {/* Gender */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Female" control={<Radio />} label="Female" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        {/* Skills */}
        <FormControl fullWidth margin="normal">
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            {skillsList.map((skill) => (
              <FormControlLabel
                key={skill}
                control={
                  <Checkbox
                    value={skill}
                    checked={formData.skills.includes(skill)}
                    onChange={handleSkillChange}
                  />
                }
                label={skill}
              />
            ))}
          </FormGroup>
        </FormControl>

        {/* Address */}
        <TextField
          fullWidth
          margin="normal"
          multiline
          rows={4}
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />

        {/* State Dropdown FIXED */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="state-label">State</InputLabel>
          <Select
            labelId="state-label"
            label="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Buttons - Properly Down */}
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            style={{ marginRight: "15px" }}
          >
            Submit
          </Button>

          <Button
            variant="outlined"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>

      </form>
    </Paper>
  </Container>
);
}

export default App;