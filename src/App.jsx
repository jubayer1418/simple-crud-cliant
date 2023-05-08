import { useState } from "react";
import "./App.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  const handleAdduser = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("users added sucessfully");
          form.reset();
        }
      });
  };
  return (
    <>
      <h1 className="text-3xl font-bold">SIPMLE CRUD</h1>
      <form onSubmit={handleAdduser} className="space-y-4">
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  );
}

export default App;
