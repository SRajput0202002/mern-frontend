import React from "react";
import { NavLink } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h1>Sorry! Page not found</h1>
          <br />
          <p>
            Oops! It seems like the page you are trying to acess does not exist.
            If you believe there an issue, feel free to report it, and we will
            look into it.
          </p>
          <br />
          <div className="btns">
            <NavLink to="/">
              <button>return home</button>
            </NavLink>
            <NavLink to="/contact">
              <button>contact admin</button>
            </NavLink>
            <br />

            <br />
          </div>
        </div>
      </section>
    </>
  );
};
