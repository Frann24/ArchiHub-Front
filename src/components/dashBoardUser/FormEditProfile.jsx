import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/user/userActions";

export default function FormEditProfile({ id }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [form, setForm] = useState({
    name: "",
    nickname: "",
    description: "",
    location: "",
    job: "",
    page: "",
  });

  function handleEditPerfil() {
    dispatch(updateUser(id, state));
  }

  function handleChange(e) {
    console.log(state);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {}

  return (
    <div>
      <input
        placeholder="Image"
        name="avatar"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Nick Name"
        name="nickname"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Description"
        name="description"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Location"
        name="location"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Job"
        name="job"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Page"
        name="page"
        onChange={(e) => handleChange(e)}
      ></input>
      <button onClick={() => handleEditPerfil()}>Save</button>
    </div>
  );
}
