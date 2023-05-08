import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../../api";

const theme = createTheme();

export default function Register() {
  //   const [role, setRole] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "consumer",
    password: "",
  });

  const [err, setErr] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErr({
      ...err,
      [event.target.name]: event.target.value ? "" : "required",
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    // check form validtion
    if (!formData.first_name) {
      setErr((prev) => {
        return {
          ...prev,
          first_name: "required",
        };
      });
    }
    if (!formData.last_name) {
      setErr((prev) => {
        return {
          ...prev,
          last_name: "required",
        };
      });
    }

    if (!formData.email) {
      setErr((prev) => {
        return {
          ...prev,
          email: "required",
        };
      });
    }
    if (!formData.password) {
      setErr((prev) => {
        return {
          ...prev,
          password: "required",
        };
      });
    }

    signUp(formData)
      .then((res) => {
        console.log(res.data);
        if (res.data?.data) {
          navigate("/login");
        } else {
          console.log(res.data.detail);
          let errors = res.data.detail;
        }
      })
      .catch((err) => {
        // console.log({ err })
        console.log(err);
        // let errors = err;

        // let temp = {};

        // errors.forEach((el) => {
        //   temp[el.param] = el.msg;
        // });

        // setErr(temp);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  name="first_name"
                  helperText={err.first_name && err.first_name}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="last_name"
                  helperText={err.last_name && err.last_name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  type="email"
                  helperText={err.email && err.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  helperText={err.password && err.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <MenuItem value="consumer">Consumer</MenuItem>
                    <MenuItem value="maker">Maker</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I agree to all the Terms & Conditions."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to={"/login"}>Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
