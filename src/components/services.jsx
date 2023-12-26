import React from "react";
import "../styling.css"

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div>
          <p className="service-para">We are able to match the best talent in the market for your business requirement. Our Talent Acquisition specialists are continuously connecting, building talent networks, and outlining individual talent information; that will be able to provide you with the necessary insight into the skills, background, motivations, and expectations of talent in order to properly assess and profile them.Our Marketing and Business Development Managers also take the time to understand your organization and are able to get a clear overview of the enterprise, the organizational structure, the company values, goals, and culture.
It is through this process that we are able to quickly endorse talent that have the required skills, background, and experience, for your company.</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
