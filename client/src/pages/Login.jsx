// import React from 'react'
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const initialData = {
   username: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialData);
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit =async (e) => {
    // console.log(userData);
    e.preventDefault()
    // console.log(userData)
    try {
      const res = await axios.post("http://localhost:5000/login",userData)
      console.log(res.data);
      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>name</label>
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        value={userData.username}
        name="username"
      />
      <label>password</label>
      <input
        type="text"
        placeholder="password"
        onChange={handleChange}
        value={userData.password}
        name="password"
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
