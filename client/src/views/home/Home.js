import React from "react";
import Footer from "../../components/footer/Footer";
import Banners from "./Banners";
import Content from "./Content";
import Header from "./Header";
import Partner from "./Partner";
import Headlines from "./Headlines";
import Credit from "../pages/Credit";
import OurPrograms from "../OurPrograms";
import Carousel from "./Carousel";
import Steps from "./Steps";
import Gallary from "./gallary";

function Home() {
  return (
    <div>
      {/* <Header /> */}
      <Banners />
      <Headlines />
      <Content />
      <Carousel />
      <Steps />
      <Partner />
      <OurPrograms />
      
      <Gallary />
      {/* <Credit /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
