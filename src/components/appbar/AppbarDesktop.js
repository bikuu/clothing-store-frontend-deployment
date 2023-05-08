import {
  FormControl as Typography,
  Input,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import { AppbarContainer, AppbarHeader, MyList } from "../../style/appbar";
import Actions from "./Actions";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { searchJob } from "../../api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { allData } from "../../redux/slice/dataSlice";

const AppbarDesktop = ({ matches }) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  function handleSearch(e) {
    e.preventDefault();
    searchJob(e.target.search.value).then((res) => {
      console.log(res);
      dispatch(allData(res.data.data));
    });
  }
  return (
    <AppbarContainer>
      <AppbarHeader>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          Clothing <span style={{ color: "#fa5221" }}>Store</span>
        </Link>
      </AppbarHeader>
      <MyList type="row">
        <ListItemIcon
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography
            component={"form"}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onSubmit={handleSearch}
          >
            <Input
              name="search"
              sx={{ width: "85%" }}
              placeholder="Search Jobs near your location (city, state, postcode)"
            />
            <Button type="submit">
              <SearchIcon />
            </Button>
          </Typography>
        </ListItemIcon>
      </MyList>

      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarDesktop;
