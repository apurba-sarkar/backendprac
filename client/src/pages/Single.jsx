// import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

export default function Single() {
  const { id } = useParams();
  const specData = data.find((obj) => obj.id === parseInt(id));
  return <div>{specData.first_name} </div>;
}
