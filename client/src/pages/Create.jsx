import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
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

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/create-user", user);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Sinh Vien</h1>

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
        Add
      </button>
    </div>
  );
};

export default Create;
