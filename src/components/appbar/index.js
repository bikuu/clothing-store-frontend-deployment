import AppbarDesktop from "./AppbarDesktop";
import AppbarMobile from "./AppbarMobile";

const Appbar = ({ matches }) => {
  return (
    <>
      {matches ? (
        <AppbarMobile matches={matches} />
      ) : (
        <AppbarDesktop matches={matches} />
      )}
    </>
  );
};

export default Appbar;
