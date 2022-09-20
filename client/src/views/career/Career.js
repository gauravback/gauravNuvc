import React from "react";
import SmallCard from "../../components/career/SmallCard";
import { getJobs } from "../../utils/dataApi";

function Career() {
  const [jobs, setJobs] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const jobData = await getJobs("?limit=15");
      setJobs(jobData ? jobData.jobs : []);
    }
    fetchData();
    return () => {
      setJobs([]);
    };
  }, []);

  return (
    <div>
      <div style={{clipPath:"polygon(0 0,100% 0,100% calc(100% - 50px),50% 100%,0 calc(100% - 50px))",padding:"5vw",backgroundColor:"rgb(63 1 83)"}}>
        {/* <img src={hero} style={{ width: "98.9vw", height: "15vw" }} /> */}
        <h1 style={{textAlign:"center",color:"#ffffff"}}>
        JOBS/नौकरियां</h1>
      </div>
    <div className="container" 
        style={{ paddingTop: "10vh", paddingBottom: 15 ,clipPath:"polygon(0 0,50% 50px,100% 0,100% 100%,0 100%)"}}>
      <div className="row">
        {jobs?.map((job) => {
          return (
            <div className="col-12 col-md-6 col-xl-4">
              <SmallCard
                title={job.title}
                salary={job.salary}
                icon={job.icon}
                id={job._id}
                url1={job.url1}
                url2={job.url2}
              />
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Career;
