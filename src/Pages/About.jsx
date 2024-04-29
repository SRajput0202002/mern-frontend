import React from "react";
import { Analytics } from "../Components/Analytics";
import { useAuth } from "../Stores/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content ">
              <p>
                Welcome,{" "}
                {user ? `${user.username} to our website ` : ` to our website`}{" "}
              </p>
              <h1>Why Choose Us?</h1>
              <p>
                Welcome, we will look into homepage styling in our latest
                tutorial! From creating a dynamic hero section to mastering CSS
                styling, buttons, analytics, and more, it's an exciting journey.
                Explore free source code and a challenge awaits you at the end!{" "}
              </p>
              <br />
              <br />
              <br />
              <br />
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
                src="/photos/about.jpg"
                alt="image"
                width="600"
                height="400"
              ></img>
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
};
