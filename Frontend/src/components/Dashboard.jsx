import React, { useEffect, useState } from "react";
import "../css/Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ role }) => {
  const [students, setStudents] = useState(0);
  const [admin, setAdmin] = useState(0);
  const [books, setBooks] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (role == "") {
      navigate("/");
    }
    axios
      .get("http://localhost:3001/dashboard")
      .then((res) => {
        if (res.data.ok) {
          setStudents(res.data.student);
          setAdmin(res.data.admin);
          setBooks(res.data.book);
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-box">
        <h2>Total Books</h2> <br />
        <h2>{books}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Students</h2> <br />
        <h2>{students}</h2>
      </div>
      <div className="dashboard-box">
        <h2>Total Admins</h2> <br />
        <h2>{admin}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
