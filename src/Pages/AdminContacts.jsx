import { useEffect, useState } from "react";
import { useAuth } from "../Stores/auth";
import { toast } from "react-toastify";

//import deleteContactsById from "../../../Server/Controllers/admin-controller";

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data", data);

      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactsById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("Updated Successfully");
      } else {
        toast.error("could not delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data</h1>
        <div className="container admin-users"></div>
        {contactData.map((curContactData, index) => {
          const { username, email, message, _id } = curContactData;

          return (
            <div key={index}>
              <p>{username}</p>
              <p>{email}</p>
              <p>{message}</p>
              <button className="btn" onClick={() => deleteContactsById(_id)}>
                delete
              </button>
            </div>
          );
        })}
      </section>
    </>
  );
};
