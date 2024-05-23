// import React from 'react'
import { useNavigate } from "react-router-dom";
import data from "./data";
// import Single from "./Single";

export default function Admin() {
  const navigate = useNavigate();
  console.log(data);


// FOR API


// const fd = async () => {
//     try {
//       const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
//       console.log(res.data);
//       setProduct(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fd();
//   }, [id]);

// -----------------

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(10,1fr)" }}>
      {data.map((e) => {
        return (
          <button key={e.id} onClick={() => navigate(`/single/${e.id}`)}>
            {e.first_name}
          </button>
        );
      })}
    </div>
  );
}
