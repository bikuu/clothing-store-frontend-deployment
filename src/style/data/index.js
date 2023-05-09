import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { slideInBottom } from "../../animation";
import { Colors } from "../theme";

export const Data = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const DataImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "300px",
  height: "250px",
  background: Colors.light_gray,
  padding: "10px",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    width: "250px",
    padding: "10px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "150px",
    padding: "10px",
  },
}));

export const LookIn = styled(Button, {
  shouldForwardProp: (prop) => prop !== "show",
})(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "2%",
    width: "100%",
    padding: "10px 5px",
    animation:
      show &&
      `${slideInBottom} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both`,
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const DataMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const DetailContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  padding: "20px",
  background: Colors.light_gray,
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  height: "100%",
  display: "flex",
  justifyContent: "end",
  background: Colors.light_gray,
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    width: "40%",
    padding: "10px",
  },
}));
export const ImageSlide = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  height: "500px",
  objectFit: "contain",
  borderRadius: "5px",
}));

export const InfoContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  alignItems: "start",
  marginTop: "20px",
  marginLeft: "25px",
  marginBottom: "50px",
  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    gap: "15px",
  },
}));

export const CustomizedText = styled("span")(() => ({
  fontSize: "20px",
  fontWeight: "400",
}));
