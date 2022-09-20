import React from "react";
import Partner from "../home/Partner";
// import Credit from "../pages/Credit";
import imagebanner from "../../asstes/bannerimage01.jpg";
import card from "../../asstes/banners/3.png";
import card2 from "../../asstes/banners/6.png";
import card3 from "../../asstes/banners/9.png";
import card4 from "../../asstes/banners/10.png";

import classNamees from "../programs/Program.css";

function Programs() {
  return (
    <div classNameName="container-fluid programs my-4">
      <div classNameName="program">
        <img
          src={imagebanner}
          alt=""
          style={{
            width: "90vw",
            backgroundSize: "cover",
            overflow: "hidden",
            marginLeft: "3.5%",
            border: "5px solid #ccc",
            borderRadius: "5px",
            margin: "5% 5% 5% 3%",
          }}
        />
      </div>
      <div classNameName="card shadow-sm">
        <div classNameName="card-body">
          <h4 classNameName="card-title">
            <b>
              <span style={{ color: "red", alignContent:"center"}}>
                <em>उद्यमित कार्नर</em>
              </span>
            </b>{" "}
          </h4>
          <p classNameName="card-text">
            उद्यमित विकास परिषद देश भर में उद्यमित विकास के सभी सरकारी, गैर
            सरकारी, अंतर्राष्ट्रीय संगठनों, औद्योगिक संगठनों के प्रयासों का
            समन्वय करने, कुशल जनशक्ति तक पहुँचाने और युवाओं को आत्मनिर्भर बनाने
            का कार्य करेगी और इस पहलों की पूर्ति के बीच की बाधाओं को दूर करने,
            व्यावसायिक और तकनीकी प्रशिक्षण करने, कौशल उन्नयन करने, नवीनतम
            रचनात्मकता बढाने और नवप्रवर्तन को बढ़ावा देने के दिशा में प्रखंड एवं
            जिला स्तर पर उद्यमित कार्नर संचालित करेगी |
          </p>
          <p classNameName="card-text">
            इन पहलों पर उद्यमित विकास परिषद् विभिन्न सम्बंधित केंद्रीय
            मंत्रालयों, राज्य सरकारों, गैर सरकारी संगठनों, औद्योगिक
            प्रतिष्ठानों, व्यवसायिक प्रशिक्षण एवं शैक्षणिक प्रतिष्ठानों, ग्राम
            पंचायत स्तर के लोकल सरकारी संगठन और अंतर्राष्ट्रीय संगठनों के साथ
            बहु-स्तरीय सहयोग और प्रयासों को और अधिक प्रभावशाली कार्यान्वयन के
            लिए कार्य कर रही है | जिसे प्रखंड एवं जिला स्तर केंद्र पर बहाल कुशल
            और प्रशिक्षित परिषद् के द्वारा संचालित की जायेगी |
          </p>
          <p classNameName="card-text">
            "उद्यमित भारत" एवं "उद्यमित विकास परिषद्" भारत सरकार के स्टार्ट अप
            इंडिया इनिशिएटिव , मेक इन इंडिया प्रोग्राम, आत्मनिर्भर भारत रोजगार
            अभियान को सशक्त बनाने के लिए एक पहल है जिसे देश के स्वावलंबन के लिए,
            आत्मनिर्भर भारत के लिए युवाओं को और अधिक रोजगारपरक और अपने रोज़गार को
            सफल बनाने के लिए स्टार्टअप मिशन के रूप में योगदान कर रही है
          </p>
        </div>
      </div>
      <div classNameName="different">
        <Partner />
      </div>

      {/* <a href="#">
        Read more <i className="fas fa-long-arrow-alt-right"></i>
      </a> */}

      <section className="facilites">
        <h1>Our Programs</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, esse.
        </p>
        <div className="row">
          <div className="facilites-col">
            <img src={card} alt="" />
            <h3>Avialiable For Server</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              repudiandae, velit rem nemo ea magni!
            </p>
          </div>
          <div className="facilites-col">
            <img src={card2} alt="" />
            <h3>Avialiable For Server</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              repudiandae, velit rem nemo ea magni!
            </p>
          </div>
          <div className="facilites-col">
            <img src={card3} alt="" />
            <h3>Avialiable For Server</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              repudiandae, velit rem nemo ea magni!
            </p>
          </div>
        </div>
      </section>

      <div className="flip-card">
        <h1>Click Me ?</h1>
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={card4} alt="" style={{ width: "30vw", height: "30vw" }} />
          </div>
          <div className="flip-card-back">
            <h1>Skill INDIA</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              repudiandae, velit rem nemo ea magni! NITI Aayog is developing
              itself as a state-of-the-art resource centre with the necessary
              knowledge and skills that will enable it to act with speed,
              promote research and innovation, provide strategic policy vision
              for the government, and deal with contingent issues. Launched by
              Hon'ble Prime Minister Shri Narendra Modi on 15 July 2015, SKILL
              INDIA MISSION aims to train over 40 crore people in India in
              different skills by 2022. The mission aims at vocational training
              and certification of Indian youth for a better livelihood and
              respect in the society.
            </p>
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Programs;
