import Banner from "./../../components/banner/index";
import Promotions from "./../../components/promotionSlider/index";
import DataList from "./../../components/dataList/index";
import Footer from "../../components/footer";

const Home = ({ matches }) => {
  return (
    <>
      <Banner />
      <Promotions />
      <DataList matches={matches} />
      <Footer matches={matches} />
    </>
  );
};

export default Home;
