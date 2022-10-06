import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createUpdate } from "../../../../redux/slices/update/updateActions";
import CreateFile from "../files/CreateFile";

const CreateUpdate = ({ project_id }) => {
  const fileData = useSelector((state) => state.storage.response);
  const userToken = JSON.parse(window.localStorage.getItem("token"));
  const [form, setForm] = useState({
    storage_id: "",
    title: "",
    comments: "",
    project_id: project_id,
    user_id: userToken ? userToken.userId : "",
  });
  useEffect(() => {
    fileData.newStorage && setForm({...form, storage_id: fileData.newStorage._id}) 
  }, [fileData])
  
  
  const dispatch = useDispatch();
  const handleSumbit = (e) => {
    dispatch(createUpdate(form));
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSumbit(e)}>
        <div></div>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          onChange={handleOnChange}
        />
        <textarea
          name="comments"
          id=""
          cols="30"
          rows="10"
          placeholder="Comments..."
          onChange={handleOnChange}
        ></textarea>
        <CreateFile ext={".dwg"}/>
        <button
          type="submit"
          disabled={
            !form.comments ||
            !form.project_id ||
            !form.storage_id ||
            !form.user_id
          }
        >
          send
        </button>
      </form>
    </div>
  );
};

export default CreateUpdate;
