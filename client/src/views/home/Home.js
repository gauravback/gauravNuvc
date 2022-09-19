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
import GalleryCaro from "./gallerycaro";
import FAQ from "./Faq";
import Review from "./Review";

function Home() {
  return (
    <div>
      <Banners />
      <Headlines />
      <Content />
      <Steps />
      <Partner />
      <OurPrograms />
      <GalleryCaro />
      <FAQ />
      <Review />
    </div>
  );
}

export default Home;
