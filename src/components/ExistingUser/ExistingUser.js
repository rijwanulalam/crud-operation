import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import './ExistingUser.css';

const ExistingUser = () => {
  return (
    <div className="existing-user">
      <Sidebar />
      <div className="user-container text-center">
        <h1>User Account</h1>
      </div>
    </div>
  );
};

export default ExistingUser;
