import React from "react";

function OurPrograms() {
  return (
    <div className="container" >
      <center>
        <br />
        <h1 style={{fontWeight:"bold",color:"rgb(63 1 83)", textDecoration:"underline"}}>
          Our Programs
        </h1>
        <br />
      </center>
      <div className="container" style={{display: "flex", flexDirection: "row", justifyContent:"space-around"}}>
      <div class="card mb-3" style={{border: "10px solid #ffffff", backgroundColor:"#2596be", borderRadius:"2rem"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://nuvc-public.s3.ap-south-1.amazonaws.com/%E0%A4%86%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%B0+%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4+%E0%A4%B0%E0%A5%8B%E0%A4%9C%E0%A4%97%E0%A4%BE%E0%A4%B0+%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE.png" class="img-fluid rounded-start" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color:"white"}}>Employment and Councelling Center</h5>
        <p class="card-text" style={{color:"white", fontWeight:"bold",textAlign:"justify"}}>Provice database of available employment opportunities in
      goverment or Non-government sector.Promoting awareness on National
      apprentice program, National Career service, NSDC ASEEM PORTAL,
      SKILL INDIA, GOVERNMENT Employment exchange, Atmanirvar Bharat
      Rojgar Abhiyan, etc</p>
        
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style={{border: "10px solid #ffffff", backgroundColor:"#2596be", borderRadius:"2rem"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://nuvc-public.s3.ap-south-1.amazonaws.com/Entrepreneurship-post--website.png" class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color:"white"}}>Entrepreneur Development Center</h5>
        <p class="card-text" style={{color:"white", fontWeight:"bold"}}>To match local entrepreneurs with local investors.Promoting awareness on various scheme of Ministry of Micro, Small
      and Medium Enterprises, Startup India, Standup India,
      Entrepreneurship Development Program of different Ministries.
      Promoting awareness on fundraising through loan or equity</p>
        
      </div>
    </div>
  </div>
</div>
</div>
<div className="container" style={{display: "flex", flexDirection: "row"}}>
      <div class="card mb-3" style={{border: "10px solid #ffffff", backgroundColor:"#2596be", borderRadius:"2rem"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://nuvc-public.s3.ap-south-1.amazonaws.com/%E0%A4%86%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%B0+%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4+%E0%A4%B0%E0%A5%8B%E0%A4%9C%E0%A4%97%E0%A4%BE%E0%A4%B0+%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE.png" class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color:"white"}}>Skill Development Program</h5>
        <p class="card-text" style={{color:"white", fontWeight:"bold"}}>To train unemployed youth respective of available opportunities and various entrepreneurship skill development program as PMKVY, DAY-NULM, Hunar se Rojgar Tak, Sankalp scheme, Nayi Roshni, Recruit-Train-Deploy Skill Development Program. Recognise the skill of the current work through skill certification.</p>
        
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style={{border: "10px solid #ffffff", backgroundColor:"#2596be", borderRadius:"2rem"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src="https://nuvc-public.s3.ap-south-1.amazonaws.com/%E0%A4%86%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%B0+%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4+%E0%A4%B0%E0%A5%8B%E0%A4%9C%E0%A4%97%E0%A4%BE%E0%A4%B0+%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE.png" class="img-fluid rounded-start"/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" style={{color:"white"}}>Empowerment Education System</h5>
        <p class="card-text" style={{color:"white", fontWeight:"bold"}}>Transform education system on NEW EDUCATION POLICY focus on
      Digital Learning based Pre School in every Panchayat, Online
      Education System, One Compulsory Skill Development Subject in
      every course, Coding Class from class 6, KAUSHAL YUVA - KUSHAL
      BHARAT, AATMANIRBHAR YUVA- AATMANIRBHAR BHARAT.</p>
        
      </div>
    </div>
  </div>
</div>
</div>
    </div>
  );
}

OurPrograms.defaultProps = {
  data: [
    {
      heading: "Employment and Councelling Center",
      desc: `Provice database of available employment opportunities in
      goverment or Non-government sector.Promoting awareness on National
      apprentice program, National Career service, NSDC ASEEM PORTAL,
      SKILL INDIA, GOVERNMENT Employment exchange, Atmanirvar Bharat
      Rojgar Abhiyan, etc`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/%E0%A4%86%E0%A4%A4%E0%A5%8D%E0%A4%AE%E0%A4%A8%E0%A4%BF%E0%A4%B0%E0%A5%8D%E0%A4%AD%E0%A4%B0+%E0%A4%AD%E0%A4%BE%E0%A4%B0%E0%A4%A4+%E0%A4%B0%E0%A5%8B%E0%A4%9C%E0%A4%97%E0%A4%BE%E0%A4%B0+%E0%A4%AF%E0%A5%8B%E0%A4%9C%E0%A4%A8%E0%A4%BE.png",
    },
    {
      heading: "Entrepreneur Development Center",
      desc: `To match local entrepreneurs with local investors.Promoting awareness on various scheme of Ministry of Micro, Small
      and Medium Enterprises, Startup India, Standup India,
      Entrepreneurship Development Program of different Ministries.
      Promoting awareness on fundraising through loan or equity
      investor.`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/Entrepreneurship-post--website.png",
    },
    {
      heading: "Skill Development Program",
      desc: `To train unemployed youth respective of available opportunities and various entrepreneurship skill development program as PMKVY, Sikho Kamao, DAY-NULM, DDUGKY, Hunar se Rojgar Tak, Sankalp scheme, Nayi Roshni, Recruit-Train-Deploy Skill Development Program`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/Skill+Development+Program.png",
    },
    {
      heading: "Empowerment Education System",
      desc: `Transform education system on NEW EDUCATION POLICY focus on
      Digital Learning based Pre School in every Panchayat, Online
      Education System, One Compulsory Skill Development Subject in
      every course, Coding Class from class 6, KAUSHAL YUVA - KUSHAL
      BHARAT, AATMANIRBHAR YUVA- AATMANIRBHAR BHARAT.`,
      image:
        "https://nuvc-public.s3.ap-south-1.amazonaws.com/NEW++NATIONAL.png",
    },
  ],
};

export default OurPrograms;
