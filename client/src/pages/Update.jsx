import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    lop: "",
    gioitinh: null,
  });
  const handleChange = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/update-user/" + userId, user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Update Sinh Vien</h1>

      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        onChange={handleChange}
      />
      <input type="text" placeholder="Lop" name="lop" onChange={handleChange} />
      <input
        type="number"
        placeholder="Gioi Tinh"
        name="gioitinh"
        onChange={handleChange}
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
