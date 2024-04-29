import React from "react";
import { FaUsers } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { TiContacts } from "react-icons/ti";
import { NavLink, Outlet, Navigate } from "react-router-dom";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { useAuth } from "../../Stores/auth";

export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin layout :", user);

  if (isLoading) {
    return <h1>Loading......</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUsers />
                  users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <TiContacts />
                  contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/services">
                  <MdOutlineMiscellaneousServices />
                  services
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <IoMdHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
