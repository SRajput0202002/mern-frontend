import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Service } from "./Pages/Service";
import { Login } from "./Pages/Login";
import { Registration } from "./Pages/Registration";
import { Navbar } from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Error } from "./Pages/Error";
import { Logout } from "./Pages/Logout";
import { AdminLayout } from "./Components/layouts/AdminLayout";
import { AdminUsers } from "./Pages/AdminUsers";
import { AdminContacts } from "./Pages/AdminContacts";
// import { UserUpdate } from "./Pages/UserUpdate";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
