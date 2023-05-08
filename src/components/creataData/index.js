import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { createJob, getJob, updateJob } from "../../api";
import { useSelector } from "react-redux";

const theme = createTheme();

export default function Upsert() {
  const imageRef = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const user = useSelector((redux_store) => {
    return redux_store.user.data;
  });
  const [formData, setFormData] = useState({
    title: "",
    images: [],
    categories: [],
    price: "",

    state: "",
    city: "",
    postalcode: "",

    description: "",
  });

  const [err, setErr] = useState({
    title: "",
    categories: [],
    price: "",

    state: "",
    city: "",
    postalcode: "",

    description: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    if (event.target.name === "categories") {
      let dataList = event.target.value.split(",");
      let newCategories = dataList.map((val) => {
        return val.trim();
      });

      setFormData({
        ...formData,
        categories: newCategories,
      });
    }

    setErr({
      ...err,
      [event.target.name]: event.target.value ? "" : "required",
    });
  }

  const onImageChange = (e) => {
    e.preventDefault();
    if (e.target.files) {
      let img = {
        ...formData,
        images: [...formData.images, ...e.target.files],
      };
      setFormData(img);
    }
  };

  useEffect(() => {
    if (id) {
      getJob(id).then((res) => {
        // setformData(res.data.data);
        console.log(res);
      });
    }
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    // check form validtion
    if (!formData.title) {
      setErr((prev) => {
        return {
          ...prev,
          title: "required",
        };
      });
    }
    if (!formData.categories) {
      setErr((prev) => {
        return {
          ...prev,
          categories: "required",
        };
      });
    }

    if (!formData.price) {
      setErr((prev) => {
        return {
          ...prev,
          price: "required",
        };
      });
    }
    if (!formData.location) {
      setErr((prev) => {
        return {
          ...prev,
          location: "required",
        };
      });
    }
    if (!formData.description) {
      setErr((prev) => {
        return {
          ...prev,
          description: "required",
        };
      });
    }
    const data = new FormData();
    data.append("title", formData.title);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("location[state]", formData.state);
    data.append("location[city]", formData.city);
    data.append("location[postalcode]", formData.postalcode);
    data.append("user_id", user.id);

    formData.categories.forEach((category) => {
      data.append("categories[]", category);
    });
    if (formData.images) {
      formData.images.forEach((img) => {
        data.append("images", img);
      });
    }
    try {
      if (id) {
        updateJob(id, data).then((res) => {
          console.log(res.data);
        });
      } else {
        createJob(data).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(JSON.stringify(Object.fromEntries(data.entries())));
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
            Create Job Post
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  helperText={err.title && err.title}
                  autoFocus
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Starting price"
                  name="price"
                  helperText={err.price && err.price}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="State Name"
                  name="state"
                  helperText={err.state && err.state}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="City Name"
                  name="city"
                  helperText={err.city && err.city}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Postal Code"
                  name="postalcode"
                  helperText={err.postalcode && err.postalcode}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="categories"
                  label="Type Design Categories like shirt, pants, traditional."
                  name="categories"
                  helperText={err.categories && err.categories}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Write about your job details and requirements"
                  id="description"
                  helperText={err.description && err.description}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  onClick={() => imageRef.current.click()}
                  sx={{
                    cursor: "pointer",
                    margin: "auto",
                    borderBottom: "1px solid red",
                    textAlign: "center",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Add Images (Min-2 Max -4 or None)
                </Typography>
              </Grid>
              <Grid item xs={12} display={"none"}>
                <input
                  type="file"
                  multiple
                  name="uploadImg"
                  ref={imageRef}
                  onChange={onImageChange}
                />
              </Grid>
              {formData.images && (
                <Grid item xs={12} display={"flex"}>
                  {formData?.images?.map((image, index) => {
                    let img_src = "";

                    if (typeof image == "string") {
                      img_src = image;
                    } else {
                      img_src = URL.createObjectURL(image);
                    }

                    return (
                      <img height={200} width={200} src={img_src} key={index} />
                    );
                  })}{" "}
                </Grid>
              )}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
