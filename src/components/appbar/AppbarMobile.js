import { AppbarContainer, AppbarHeader } from "../../style/appbar";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import Actions from "./Actions";
import { Button, IconButton, Input, Typography } from "@mui/material";

import { useDispatch } from "react-redux";
import { setDrawer } from "../../redux/slice/drawerSlice";
import { useState } from "react";
import { Link } from "react-router-dom";
import { searchJob } from "../../api";
import { allData } from "../../redux/slice/dataSlice";

const AppbarMobile = ({ matches }) => {
  const dispatch = useDispatch();
  const [searchOpen, setSearchOpen] = useState(false);

  const [show, setShow] = useState(false);

  function handleSearch(e) {
    e.preventDefault();
    searchJob(e.target.value).then((res) => {
      console.log(res);
      dispatch(allData(res.data.data));
    });
  }

  const handleSetData = () => {
    dispatch(setDrawer(true));
    console.log("click");
  };

  return (
    <AppbarContainer>
      <IconButton onClick={handleSetData}>
        <MenuIcon />
      </IconButton>
      {!searchOpen ? (
        <AppbarHeader textAlign={"center"} variant="h4">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            Clothing <span style={{ color: "#fa5221" }}>Store</span>
          </Link>{" "}
        </AppbarHeader>
      ) : (
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
          <Button type="submit" sx={{ display: "none" }}></Button>
        </Typography>
      )}

      <IconButton onClick={() => setSearchOpen((prev) => !prev)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppbarContainer>
  );
};

export default AppbarMobile;
