// import React from 'react'

import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>navigate("/login")}> login</button>
      <div> login</div>
      <button onClick={()=>navigate("/signup")}>signup</button>
      <div> signup</div>
    </div>
  );
}
