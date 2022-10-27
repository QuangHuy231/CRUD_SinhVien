import React from "react";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

const User = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:8800/users");
        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetch();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete("http://localhost:8800/delete-user/" + userId);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Danh sách Sinh Viên</h1>

      {users.map((user) => (
        <div className="user" key={user.id}>
          <h2>{user.firstName}</h2>
          <h2>{user.lastName}</h2>
          <h3>{user.lop}</h3>
          <h3>{user.gioitinh}</h3>

          <button
            className="formButton delete"
            onClick={() => {
              handleDelete(user.id);
            }}
          >
            Delete
          </button>
          <Link to={`/update-user/${user.id}`} className="formButton update">
            Update
          </Link>
        </div>
      ))}

      <Link className="btn-addUser" to="/create-user">
        Add New SinhVien
      </Link>
    </div>
  );
};

export default User;
