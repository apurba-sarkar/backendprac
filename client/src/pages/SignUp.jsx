// import React from 'react'

import { useState } from "react";

export default function SignUp() {
    const initialData = {
        name: "",
        password: "",
      };
    
      const [userData, setUserData] = useState(initialData);
      const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    
        setUserData({ ...userData, [name]: value });
      };
    
      const handleSubmit = () => {
        console.log(userData);
      };
  return (
    <div>

    <div>SignUp</div>
    <div style={{ display: "flex", flexDirection: "column" }}>
      <label>name</label>
      <input
        type="text"
        placeholder="email"
        onChange={handleChange}
        value={userData.name}
        name="name"
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
    </div>
  )
}
