/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("deleted successfully");
        }
      });
  };
  return (
    <div>
      <h1>{users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name}:{user.email}
            <Link to={`/update/${user._id}`}>
              <button>update</button>
            </Link>
            <button onClick={() => handleDelete(user._id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
