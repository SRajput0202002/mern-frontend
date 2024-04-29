import React from "react";
import { useAuth } from "../Stores/auth";
import "./Services.css";

export const Service = () => {
  const { services } = useAuth();

  // Check if services is undefined or empty array
  if (!services || services.length === 0) {
    return (
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
          <p>No services available</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-services">
      <div className="container">
        <h1 className="main-heading">Services</h1>
      </div>
      <div className="container grid grid-three-cols">
        {services.map((curElem, index) => {
          const { price, description, provider, service } = curElem;

          return (
            <div className="card" key={index}>
              <div className="card-img">
                <img src="/photos/new.jpg" alt="pic" width="200" />
              </div>

              <div className="card-details">
                <div className="grid grid-two-cols">
                  <p>{provider}</p>
                  <p>{price}</p>
                </div>
                <h2>{service}</h2>
                <p>{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
