/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";

const Updata = () => {
  const loaderuser = useLoaderData();
  const handleUpdeta = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    // console.log(name, email);

    const updateUser = { name, email };
    fetch(`http://localhost:5000/users/${loaderuser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("user updated sucessfully");
        }
      });
  };
  return (
    <div>
      <h1>{loaderuser.name}</h1>
      <form onSubmit={handleUpdeta} className="space-y-4">
        <input
          type="text"
          name="name"
          defaultValue={loaderuser?.name}
          placeholder="name"
        />
        <br />
        <input
          type="email"
          name="email"
          defaultValue={loaderuser?.email}
          placeholder="email"
        />
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default Updata;
