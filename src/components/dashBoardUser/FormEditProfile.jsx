import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/user/userActions";

export default function FormEditProfile({ id }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({});

  function handleEditPerfil() {
    console.log(state);
    // const newState = state;
    // newState.name = "Paula";
    // newState.lastname = "Celman";

    dispatch(updateUser(id, state));
    console.log("hecho");
    window.location.reload();
  }

  function handleChange(e) {
    console.log(state);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <input
        placeholder="Image"
        name="avatar"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Nickname"
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
        placeholder="Job Title"
        name="job"
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        placeholder="Webpage"
        name="page"
        onChange={(e) => handleChange(e)}
      ></input>
      <button onClick={() => handleEditPerfil()}>Save</button>
    </div>
  );
}
