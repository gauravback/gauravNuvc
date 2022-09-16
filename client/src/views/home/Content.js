import React from "react";
import ContentCard from "./ContentCard";
import News from "./News";
import Notifications from "./Notifications";

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
        <div >
          <ContentCard />
        </div>
        <div class="container">
        <div className="row">
          <div className="col order-first mb-4 " >
            <News />
          </div>
          <div className="col order-first mb-4 ">
            <Notifications />
          </div>
        </div>
        </div>
      
    </div>
  );
}

export default Content;
