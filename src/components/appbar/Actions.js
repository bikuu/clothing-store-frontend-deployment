import {
  ListItemIcon,
  Typography,
  ListItemText,
  Popover,
  ListItemButton,
} from "@mui/material";
import {
  ActionIconsContainerDesktop,
  ActionIconsContainerMobile,
  MyList,
  StyledBadge,
} from "../../style/appbar";
import PersonIcon from "@mui/icons-material/Person";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { CONSUMER } from "../../constants/role";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router";
import { logout } from "../../redux/slice/userSlice";
import { logoutUser } from "../../api";

const Actions = ({ matches }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((redux_state) => redux_state.user.data);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    dispatch(logout());
    logoutUser().then((res) => {
      if (res.data.msg) {
        navigate("/");
      }
    });
  };
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

        {user && user.role === CONSUMER ? (
          <ListItemText>
            <Link
              to={"/job/create"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Post Jobs</Typography>
            </Link>
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
              onClick={handleClick}
            />

            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <ListItemButton>
                <Typography>Profile</Typography>
              </ListItemButton>
              <ListItemButton onClick={handleLogout}>
                <Typography>Logout</Typography>
              </ListItemButton>
            </Popover>
          </StyledBadge>
        )}
      </MyList>
    </Component>
  );
};

export default Actions;
