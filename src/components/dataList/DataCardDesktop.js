import { useState } from "react";
import { Data, LookIn, DataImage } from "../../style/data";

import DataMeta from "./DataMeta";
import { Link } from "react-router-dom";

const DataCardDesktop = ({ data, matches }) => {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };
  return (
    <>
      <Data onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <DataImage src={data.image} />
        {(showOptions || matches) && (
          <LookIn variant="contained">
            <Link
              to={`/job/${data.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              View{" "}
            </Link>
          </LookIn>
        )}
      </Data>
      <DataMeta data={data} />
    </>
  );
};

export default DataCardDesktop;
