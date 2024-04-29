import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../Stores/auth";
import { toast } from "react-toastify";
// import { Registration } from "./Registration"

const URL = "http://localhost:5000/api/auth/login";
export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("login form", response);
      const res_data = await response.json();

      if (response.ok) {
        toast.success("Login Successful");

        storetokenInLS(res_data.token);

        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log(error);
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
                  src="/photos/Login.jpg"
                  alt="student is trying to do the login"
                  width="800"
                  height="600"
                />
              </div>

              {/* registration form */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />

                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
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
                        Login
                      </button>
                    </div>
                    <br />
                    <div>
                      <NavLink className="navlivk" to="/register">
                        Register here
                      </NavLink>
                    </div>
                  </div>
                  {/* <p>
                    If you are new User{" "}
                    <button onClick={handleClick} className="btn btn-submit">
                      register now
                    </button>{" "}
                    Yourself here
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
