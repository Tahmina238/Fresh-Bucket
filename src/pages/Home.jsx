import BestOrganicProducts from "../components/BestOrganicProducts";
import Concious from "../components/Concious";
import FeaturesProducts from "../components/FeaturesProducts";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import International from "../components/International";
import LandingPage from "../components/LandingPage";
//import Hero from "../components/Hero";
import OurOrganicProducts from "../components/OurOrganicProducts";
import Trusted from "../components/Trusted";
import Vegetable from "../components/Vegetable";
import useMediaQuery from "../hooks/useMediaQuery";

const Home = () => {
  const isMobile = useMediaQuery("(min-width:600px)");
  console.log("isMobile from Reducer", isMobile);
  const isDesktop = useMediaQuery("(min-width:960px)");
  console.log(isDesktop);

  return (
    <div>
      <LandingPage></LandingPage>
      <HeroSection></HeroSection>

      <FeaturesProducts></FeaturesProducts>
      <BestOrganicProducts></BestOrganicProducts>

      <OurOrganicProducts></OurOrganicProducts>
      <Vegetable></Vegetable>

      <Trusted></Trusted>
      <International></International>

      <Concious></Concious>
      <Footer></Footer>
    </div>
  );
};

export default Home;
