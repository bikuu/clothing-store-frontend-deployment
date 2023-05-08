import {
  Grid,
  List,
  Typography,
  Button,
  Stack,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../style/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Subscribe, FooterTitle } from "../../style/footer";
import SendIcon from "@mui/icons-material/Send";

const Footer = ({ matches }) => {
  return (
    <Box
      sx={{
        background: Colors.light_gray,
        color: Colors.black,
        padding: { xs: 4, md: 10 },
        paddingTop: 12,
        padingBottom: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6} lg={4}>
          <FooterTitle variant="h6">About us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm tempor
            incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud.
          </Typography>
          <Box
            textAlign={matches ? "center" : "none"}
            sx={{
              marginTop: 4,
              color: Colors.dark,
            }}
          >
            <FacebookIcon sx={{ marginRight: 1 }} />
            <TwitterIcon sx={{ marginRight: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid>
        <Grid item xs={6} md={6} lg={2}>
          <FooterTitle variant="body1">Information</FooterTitle>
          <List>
            <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemButton>
            <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                Need Help ?
              </Typography>
            </ListItemButton>
            <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemButton>
            <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={6} md={6} lg={2}>
          <FooterTitle variant="body1">My Account</FooterTitle>
          <List>
          <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemButton>
            <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                My Jobs
              </Typography>
            </ListItemButton>
            <ListItemButton disableGutters>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemButton>
          </List>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <FooterTitle variant="body1">Newsletter</FooterTitle>
          <Stack>
            <Subscribe
              color="primary"
              label="Email address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ marginTop: 4, marginBottom: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
