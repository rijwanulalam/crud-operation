import React from 'react';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import './CreateUser.css';

const CreateUser = () => {

    const {
        register,
        handleSubmit,
      } = useForm();

      const onSubmit = (data) => {
          const createUser = {
            userName: data.userName,
            userEmail: data.userEmail,
            gender: data.gender,
          }
          console.log(createUser);
          const url = `http://localhost:5000/createuser`;
          fetch(url, {
          method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(createUser),
    }).then((res) => console.log("server side response"));

      }
    return (
        <div className="create-user">
            <Sidebar />
            <div className="create-user-container">
                <div className="shadow-lg p-3 mb-5 rounded">
                <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control"
          name="userName"
          placeholder="User name"
          type="text"
          {...register("userName")}
        />
        <br />
        <input
          className="form-control"
          name="userEmail"
          placeholder="User Email"
          type="text"
          {...register("userEmail")}
        />
        <br />
        <p>Select Gender</p>
        <select {...register("gender")}>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
        </select>
        <br />
        <br />
        <input type="submit" />
      </form>
          </div>
            </div>
        </div>
    );
};

export default CreateUser;