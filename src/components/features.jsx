import React from "react";

export const Features = (props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', backgroundColor: '#f5f5f5' }}>
      
      <div style={{ maxWidth: '600px', padding: '30px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0,0,0,0.1)' }}>
        <p style={{ fontSize: '24px', fontStyle: 'italic', textAlign: 'center' }}>
          "“What is truly remarkable is Career Map’s ability to successfully deliver high quality candidates despite the location.”"
        </p>

        <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div>
            <p style={{ margin: '0', fontWeight: 'bold' }}>-Director</p>
            <p style={{ margin: '0' }}>Electric Bike Ambassador Project</p>
          </div>
        </div>
      </div>

    </div>
  );
};
