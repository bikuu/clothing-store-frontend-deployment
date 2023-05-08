import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  styled,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../style/appbar";
import { Colors } from "../../style/theme";

import { useSelector, useDispatch } from "react-redux";
import { setDrawer } from "../../redux/slice/drawerSlice";
import { logoutUser } from "../../api";

const MiddleDivider = styled((props) => (
  <Divider variant="middle" {...props} />
))``;

const AppDrawer = () => {
  const dispatch = useDispatch();

  const drawerOpen = useSelector((state) => state.drawer.data);

  const handleLogout = () => {
    // localStorage.removeItem("access_token")
    dispatch(logoutUser());
  };

  const handleSetData = () => {
    dispatch(setDrawer(false));
  };

  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton onClick={handleSetData}>
          <CloseIcon
            sx={{
              fontSize: "1.5rem",
              color: Colors.secondary,
              zIndex: 9999999,
            }}
          />
        </DrawerCloseButton>
      )}

      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Jobs</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <MiddleDivider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={handleLogout}>
            <ListItemText>Log Out</ListItemText>
          </ListItemButton>
          <MiddleDivider />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
