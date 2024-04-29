import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Stores/auth";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/register";
export const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleClick = () => {
    navigate("/login");
  };
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };
  //handling the form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    // alert(user);
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log("data from registration", res_data.message);

      if (response.ok) {
        //store the data in the local storage
        storetokenInLS(res_data.token);
        // localStorage.setItem("token", res_data);
        setUser({ username: "", email: "", phone: "", password: "" });
        toast.success("Registration Successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/photos/register.png"
                  alt="student is trying to do the registration"
                  width="800"
                  height="600"
                />
              </div>

              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">username</label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">phone</label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Enter your Phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <div className="btns">
                    <div>
                      <button type="submit" className="btn btn-submit">
                        Register Now
                      </button>
                    </div>
                    <br />
                    <div>
                      <NavLink className="navlivk" to="/login">
                        already registered ?
                      </NavLink>
                    </div>
                  </div>

                  <br />
                  {/* <p>
                    If u are already registered ?{" "}
                    <button onClick={handleClick} className="btn btn-submit">
                      Login
                    </button>{" "}
                    now
                  </p> */}
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
