//  import React, { useEffect, useState } from "react";
//  import { useParams } from "react-router-dom";
//  import { useAuth } from "../Stores/auth";

//  export const AdminUpdate = () => {
//    const [data, setData] = useState({
//     username:"",
//     email:"",
//     phone:"",
//    });

//    const params = useParams();
//    console.log("params single user: ", params);
//    const { authorizationtoken } = useAuth();



//   useEffect(() => {
//     const fetchUserData = async () => {
//         consol
//       try {
//         const response = await fetch(
//           `http://localhost:5000/api/admin/users/${id}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: authorizationToken,
//             },
//           }
//         );
//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchUserData();
//   }, [id]);

//   const updateUser = async () => {
//     // Implement update logic here
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>Update User</h2>
//       <label>Name: </label>
//       <input type="text" value={user.username} />
//       <br />
//       <label>Email: </label>
//       <input type="email" value={user.email} />
//       <br />
//       <label>Phone: </label>
//       <input type="text" value={user.phone} />
//       <br />
//       <button onClick={updateUser}>Update</button>
//     </div>
//   );
// };
