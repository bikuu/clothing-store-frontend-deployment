import { useDispatch, useSelector } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import DataCardMobile from "./DataCardMobile";
import DataCardDesktop from "./DataCardDesktop";
import { getAllJobs } from "../../api";
import { allData } from "../../redux/slice/dataSlice";
import { useEffect } from "react";
import { CONSUMER } from "./../../constants/role";

const DataList = ({ matches }) => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.data.data);
  const user = useSelector((state) => state.user.data);
  // const [currentPage, setCurrentPage] = useState(1);
  // const limit = 8;
  // const totalPages = Math.ceil(products?.length / limit);
  useEffect(() => {
    getAllJobs()
      .then((res) => {
        dispatch(allData(res.data.datas));
        console.log(res.data.datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const renderDatas = datas?.map((data) => (
    <Grid
      item
      key={data.id}
      xs={2}
      sm={4}
      md={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
    >
      {matches ? (
        <DataCardMobile data={data} matches={matches} />
      ) : (
        <DataCardDesktop data={data} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <>
      <Typography textAlign="center" variant="h4" padding="5px">
        {user.role === CONSUMER ? "List of Workfolio" : "List of Jobs"}
      </Typography>
      <Container>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          justifyContent="center"
          sx={{ margin: `20px 4px 10px 4px` }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {renderDatas}
        </Grid>
      </Container>
    </>
  );
};

export default DataList;
