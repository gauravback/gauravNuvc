import React from "react";
import DigitalCard from "../../components/digitalLearning/DigitalCard";
import { getDigitalCourses } from "../../utils/dataApi";
import hero from "../../asstes/digital/hero.png";

function DigitalLearning() {
  const [courses, setCourses] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const courseData = await getDigitalCourses("?limit=15");
      if (courseData) {
        setCourses(courseData.courses);
      }
    }
    fetchData();
    return () => {
      setCourses([]);
    };
  }, []);
  return (
    <div >
      <div style={{clipPath:"polygon(0 0,100% 0,100% calc(100% - 50px),50% 100%,0 calc(100% - 50px))",padding:"5vw",backgroundColor:"rgb(63 1 83)"}}>
        {/* <img src={hero} style={{ width: "98.9vw", height: "15vw" }} /> */}
        <h1 style={{textAlign:"center",color:"#ffffff"}}>DIGITAL LEARNING/डिजिटल लर्निंग</h1>
      </div>
      <div
        className="container-fluid"
        style={{ paddingTop: "10vh", paddingBottom: 15 ,clipPath:"polygon(0 0,50% 50px,100% 0,100% 100%,0 100%)"}}
      >
        <div className="row">
          {courses?.map((course) => {
            return (
              <div className="col-12 col-md-6 col-xl-4">
                <DigitalCard
                  name={course.name}
                  price={course.price}
                  icon={course.icon}
                  discp={course.description}
                  id={course._id}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DigitalLearning;
