import { Box, Button, Grid, Typography } from "@mui/material";
import {
  CustomizedText,
  DetailContainer,
  ImageContainer,
  ImageSlide,
  InfoContainer,
} from "../../style/data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJob } from "./../../api/index";
import { Link } from "react-router-dom";
const DataDetail = () => {
  const [result, setResult] = useState({});

  const { id } = useParams();
  const user = useSelector((redux_store) => {
    return redux_store.user.data;
  });

  function fetchDataDetail() {
    getJob(id).then((res) => {
      console.log(res.data.data);
      setResult(res.data.data);
    });
  }

  useEffect(() => {
    fetchDataDetail();
  }, []);

  return (
    <>
      <DetailContainer>
        <ImageContainer overflow={"hidden"}>
          {result?.images?.map((image, idx) => (
            <ImageSlide src={image} />
          ))}
        </ImageContainer>
        <InfoContainer>
          <span>
            <CustomizedText>{result?.posted_by}</CustomizedText> is looking for
            :
          </span>
          <Typography variant="h5">{result?.title}</Typography>
          <span>
            Categories :{" "}
            <CustomizedText>
              {" "}
              {result.categories?.map((category) => `${category}, `)}
            </CustomizedText>
          </span>
          <span>
            Starting Price :{" "}
            <CustomizedText>$AUD {result?.price}</CustomizedText>
          </span>

          <span>
            Location :{" "}
            <CustomizedText>
              {
                (result?.location?.state,
                result?.location?.city,
                result?.location?.postalcode)
              }
            </CustomizedText>
          </span>
          <span>
            Applied Users :
            <CustomizedText> {result?.totalQuotation}</CustomizedText>
          </span>
          <span>
            Status :
            <CustomizedText> InterViewing - 2 , Pending - 3</CustomizedText>
          </span>
          <span>
            Description : <CustomizedText>{result?.description}</CustomizedText>
          </span>
          {user.id === result.user_id ? (
            <Link to={`/edit/${id}`}>
              {" "}
              <Button>Edit</Button>
            </Link>
          ) : (
            <Button>Apply Now</Button>
          )}
        </InfoContainer>
      </DetailContainer>
      {user.id === result.user_id && (
        <Grid sx={12} display={"flex"}>
          {result.appliedUser?.map((data) => {
            <Box>
              {" "}
              {data.first_name} {data.last_name}{" "}
            </Box>;
          })}
        </Grid>
      )}
    </>
  );
};

export default DataDetail;
