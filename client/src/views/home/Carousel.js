// import React from "react";
// import b1 from "../../asstes/a3.jpg";
// import b2 from "../../asstes/a2.jpg";
// import b3 from "../../asstes/a1.jpg";
// import b4 from "../../asstes/slider4.jpg";
// import b5 from "../../asstes/slider5.jpg";

// function Carousel() {
//   return (
//     <div className="container" style={{display:"flex", flexDirection:"row"}}>
//     <div className="col order-first mb-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,1)"}}>
//     <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="1000">
//       <img src={b1} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
//       </div>
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//       <img src={b2} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
        
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={b3} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
        
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={b4} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
        
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//     <div className="col order-first mb-4" style={{ boxShadow: "10px 10px 10px rgba(0,0,0,1)"}}>
//     <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active" data-bs-interval="1000">
//       <img src={b1} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
//       </div>
//     </div>
//     <div class="carousel-item" data-bs-interval="2000">
//       <img src={b2} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
        
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={b3} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
        
//       </div>
//     </div>
//     <div class="carousel-item">
//       <img src={b4} class="d-block w-100" alt="..."></img>
//       <div class="carousel-caption d-none d-md-block">
        
//       </div>
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>
//     </div>
//     </div>
//   );
// }

// export default Carousel;

import "../About.css";
import { useState } from "react";
import Slider from "react-slick";
import astronaut from "./assets/astronaut.png";
import celebrating from "./assets/celebrating.png";
import education from "./assets/education.png";
import taken from "./assets/taken.png";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const images = [astronaut, celebrating, education, taken];

function Carousel() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="App">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;