import { Typography } from "@mui/material";
import { DataMetaWrapper } from "../../style/data";
export default function DataMeta({ data, matches }) {
  return (
    <DataMetaWrapper>
      <Typography variant={matches ? "caption" : "body1"} lineHeight={2}>
        {data.posted_by} is looking for
      </Typography>
      <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
        {data.title}
      </Typography>
      <Typography variant={matches ? "caption" : "body1"}>
        Starting price is ${data.price}
      </Typography>
    </DataMetaWrapper>
  );
}
