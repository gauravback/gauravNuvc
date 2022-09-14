import React from "react";

function Top() {
  return (
    <div className="top-container" style={{
      backgroundColor:'#a6c3d1',
      display: 'flex',
      justifyContent: 'center',

    }}>
      
      <div className="top-right"></div>
      <p>
                    <b>Phone:</b> <a href="tel:01146579553">+91 9599581858</a>
                  </p>
                  <p>
                    <b style={{}}>NAV UDYAM</b>
                    
                  </p>
                  <p>
                    <b>Email:</b>
                    <a href="mailto:admin@nuvc.org"> admin@nuvc.org</a>
                  </p>
    </div>
  );
}

export default Top;
