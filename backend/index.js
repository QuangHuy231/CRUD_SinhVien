import express from "express";
import mysql from "mysql";

import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "huycool2311",
  database: "thongtinsinhvien",
});

app.get("/users", (req, res) => {
  const q = "SELECT * FROM sinhvien";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/create-user", (req, res) => {
  const q =
    "INSERT INTO sinhvien (`firstName`,`lastName`,`lop`,`gioitinh`) VALUES (?)";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.lop,
    req.body.gioitinh,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been created successfully");
  });
});

app.get("/", (req, res) => {
  res.json("hello backend");
});

app.delete("/delete-user/:id", (req, res) => {
  const UserId = req.params.id;

  const q = "DELETE FROM sinhvien WHERE id = ?";

  db.query(q, [UserId], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been deleted successfully");
  });
});

app.put("/update-user/:id", (req, res) => {
  const userId = req.params.id;

  const q =
    "UPDATE sinhvien SET `firstName` = ?, `lastName` = ?, `lop` = ?, `gioitinh` = ? WHERE id = ?";

  const values = [
    req.body.firstName,
    req.body.lastName,
    req.body.lop,
    req.body.gioitinh,
  ];

  db.query(q, [...values, userId], (err, data) => {
    if (err) return res.json(err);
    return res.json("User has been updated successfully");
  });
});
app.listen(8800, () => {
  console.log("Connected to backend");
});
