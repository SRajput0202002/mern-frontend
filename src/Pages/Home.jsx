import React from "react";
import { Analytics } from "../Components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content ">
              <p>I am learning the react</p>
              <br></br>
              <br></br>
              <h1>Welcome to my website</h1>
              <br></br>
              <p>
                Welcome, we will look into homepage styling in our latest
                tutorial! From creating a dynamic hero section to mastering CSS
                styling, buttons, analytics, and more, it's an exciting journey.
                Explore free source code and a challenge awaits you at the end!{" "}
              </p>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">Learn more</button>
                </a>
              </div>
            </div>

            {/* hero-images */}
            <div className="hero-image">
              <img
                src="/photos/design.jpg"
                alt="image"
                width="600"
                height="400"
              ></img>
            </div>
          </div>
        </section>
      </main>

      {/* Second Section */}

     <Analytics />


      {/* Third section */}

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero-images */}
          <div className="hero-image">
            <img
              src="/photos/new.jpg"
              alt="image"
              width="600"
              height="400"
            ></img>
          </div>
          <div className="hero-content ">
            <p>I am learning the react</p>
            <h1>Welcome to my website</h1>
            <p>
              Welcome, we will look into homepage styling in our latest
              tutorial! From creating a dynamic hero section to mastering CSS
              styling, buttons, analytics, and more, it's an exciting journey.
              Explore free source code and a challenge awaits you at the end!{" "}
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
