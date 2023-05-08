import { Link } from "react-router-dom";
import { Data, LookIn, DataImage } from "../../style/data";
import DataMeta from "./DataMeta";

const DataCardMobile = ({ data, matches }) => {
  return (
    <>
      <Data>
        <DataImage src={data.image} />
        <DataMeta data={data} matches={matches} />
      </Data>
      <Link to={`/job/${data.id}`}>
        <LookIn variant="contained">View</LookIn>
      </Link>
    </>
  );
};

export default DataCardMobile;
