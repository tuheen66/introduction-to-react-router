/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const userStyle = {
    border: "2px solid yellow",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "5px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>email : {email} </p>
      <p>phone : {phone}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
    </div>
  );
};

export default User;
