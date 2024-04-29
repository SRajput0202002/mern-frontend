import React, { useEffect, useState } from "react";
import { useAuth } from "../Stores/auth";
import { Link } from "react-router-dom";

export const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [updatedUserData, setUpdatedUserData] = useState({});
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        alert("are you sure want to delete the user");
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (index) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${users[index]._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(updatedUserData),
        }
      );
      if (response.ok) {
        setEditingIndex(-1); // Disable editing after update
        getAllUsersData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []);

  const handleInputChange = (e, key) => {
    setUpdatedUserData({
      ...updatedUserData,
      [key]: e.target.value,
    });
  };

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h2>Admin Users Data</h2>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => (
                <tr key={index}>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={updatedUserData.username || curUser.username}
                        onChange={(e) => handleInputChange(e, "username")}
                      />
                    ) : (
                      curUser.username
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="email"
                        value={updatedUserData.email || curUser.email}
                        onChange={(e) => handleInputChange(e, "email")}
                      />
                    ) : (
                      curUser.email
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <input
                        type="text"
                        value={updatedUserData.phone || curUser.phone}
                        onChange={(e) => handleInputChange(e, "phone")}
                      />
                    ) : (
                      curUser.phone
                    )}
                  </td>
                  <td>
                    {editingIndex === index ? (
                      <button onClick={() => updateUser(index)}>Update</button>
                    ) : (
                      <button onClick={() => setEditingIndex(index)}>
                        Edit
                      </button>
                    )}
                    <button onClick={() => deleteUser(curUser._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
