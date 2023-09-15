/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useGlobalState } from "../components/UserContext.jsx";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [user, setUser] = useGlobalState("user");
  const nav = useNavigate();

  useEffect(() => {
    if (user.role !== 2) {
      nav("/");
    }
  }, []);
  return (
    <div>
      <Navbar />
      Admin
    </div>
  );
};

export default Admin;
