import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Update = () => {
  const state = useLocation().state;

  const [firstName, setFirstName] = useState(state.firstName);
  const [lastName, setLastName] = useState(state.lastName);
  const [lop, setLop] = useState(state.lop);
  const [gioitinh, setGioitinh] = useState(state.gioitinh);

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8800/update-user/" + state.id, {
        firstName,
        lastName,
        lop,
        gioitinh,
      });
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
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Lop"
        name="lop"
        value={lop}
        onChange={(e) => setLop(e.target.value)}
      />
      <input
        type="number"
        placeholder="Gioi Tinh"
        name="gioitinh"
        value={gioitinh}
        onChange={(e) => setGioitinh(e.target.value)}
      />

      <button className="formButton" onClick={handleClick}>
        Update
      </button>
    </div>
  );
};

export default Update;
