import React from "react";
import ContentCard from "./ContentCard";
import News from "./News";
import Notifications from "./Notifications";
// import SmallCard from "../../components/career/SmallCard";
import { getJobs } from "../../utils/dataApi";

function Content() {
  const [jobs, setJobs] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const jobData = await getJobs("?limit=3");

      setJobs(jobData ? jobData.jobs : []);
    }
    // fetchData();
    return () => {
      setJobs([]);
    };
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-md-15">
          <ContentCard />
        </div>
        <div className="newss">
        <div className="row">
          <div className="col-12 mb-4 mb-sm-0 col-sm-6" >
            <News />
          </div>
          <div className="col-12 mb-4 mb-sm-0 col-sm-6">
            <Notifications />
          </div>
        </div>
        </div>

      </div>
      
    </div>
  );
}

export default Content;
