import { ListItemIcon, Typography, ListItemText } from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
  StyledBadge,
} from "../../style/appbar";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { CONSUMER, MAKER } from "../../constants/role";
import { useSelector } from "react-redux";

const Actions = ({ matches }) => {
  const user = useSelector((redux_state) => redux_state.user.data);

  const Component = matches
    ? ActionIconsContainerMobile
    : ActionIconsContainerDesktop;
  return (
    <Component>
      <MyList type="row">
        {user && (
          <ListItemText>
            <Typography>My Jobs</Typography>
          </ListItemText>
        )}

        {user.role === CONSUMER ? (
          <ListItemText>
            <Typography>Post Jobs</Typography>
          </ListItemText>
        ) : (
          <ListItemText>
            <Link
              to={"/workfolio/create"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              {" "}
              <Typography>Post Gigs</Typography>
            </Link>
          </ListItemText>
        )}

        {!user && (
          <>
            <ListItemText>
              <Typography>About Us</Typography>
            </ListItemText>
            <ListItemText>
              <Typography>Hire Designers</Typography>
            </ListItemText>
          </>
        )}

        {!user ? (
          <ListItemIcon
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              gap: "2px",
            }}
          >
            {" "}
            <Link
              to={"/login"}
              style={{
                textDecoration: "none",
                display: "flex",
                color: "black",
              }}
            >
              {" "}
              <Typography>Join Us</Typography>
              <PersonIcon />{" "}
            </Link>
          </ListItemIcon>
        ) : (
          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
          >
            <Avatar
              alt="Bibek"
              src="https://images.pexels.com/photos/4052752/pexels-photo-4052752.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </StyledBadge>
        )}
      </MyList>
    </Component>
  );
};

export default Actions;
