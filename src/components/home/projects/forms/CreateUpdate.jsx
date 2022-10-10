import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createUpdate } from "../../../../redux/slices/update/updateActions";
import CreateFile from "../files/CreateFile";
import "./createUpdate.css";

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
    fileData.newStorage &&
      setForm({ ...form, storage_id: fileData.newStorage._id });
  }, [fileData]);

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
    <div className="m-2">
      <form onSubmit={(e) => handleSumbit(e)}>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          onChange={handleOnChange}
          className="my-2 border p-2 w-full"
        />
        <textarea
          name="comments"
          id=""
          className="my-2 p-2 border w-full"
          cols="30"
          rows="10"
          placeholder="Comments..."
          onChange={handleOnChange}
        ></textarea>
        <div className="flex items-center flex-col">
          <CreateFile ext={".dwg"} />
          <button
            className="learn-more"
            type="submit"
            disabled={
              !form.comments ||
              !form.project_id ||
              !form.storage_id ||
              !form.user_id
            }
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUpdate;
