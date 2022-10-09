import React from "react";
import { useState } from "react";
import CreateFile from "../files/CreateFile";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/slices/user/userActions";
import { useEffect } from "react";
import { getStorageById } from "../../../../redux/slices/storage/storageActions";
import VisualizePDF from "../VisualizePDF";
import { createProject } from "../../../../redux/slices/project/projectActions";

const CreateProject = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const fileData = useSelector((state) => state.storage.response);
  const userToken = JSON.parse(window.localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    visibility: "",
    created_by: userToken ? userToken.userId : "",
    users: "",
    pdf_file: "",
    project_file: "",
  });

  useEffect(() => {
    if (
      fileData.newStorage &&
      fileData.newStorage.filename.split(".").pop() === "pdf"
    ) {
      fileData.newStorage &&
        setForm({ ...form, pdf_file: fileData.newStorage._id });
    } else {
      fileData.newStorage &&
        setForm({ ...form, project_file: fileData.newStorage._id });
    }
    if (fileData.newStorage) dispatch(getStorageById(fileData.newStorage._id));
  }, [fileData, dispatch]);

  const pdf_get = useSelector((state) => state.storage.storage);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const options2 = [
    {
      label: "Public",
      value: "public",
    },
    {
      label: "Private",
      value: "private",
    },
  ];
  const handleSelectVisibility = (value) => {
    setForm({
      ...form,
      visibility: value,
    });
  };
  const options = allUsers.map((e) => {
    return {
      value: e._id,
      label: e.nickname,
    };
  });
  const handleSelectUsers = (value) => {
    setForm({
      ...form,
      users: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProject(form));
    setForm({
      title: "",
      description: "",
      visibility: "",
      created_by: "",
      users: "",
      pdf_file: "",
      project_file: "",
    });
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>Title</label>
        <input
          type="text"
          placeholder="Title..."
          name="title"
          onChange={(e) => handleChange(e)}
        />
        <label>Description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          placeholder="Type the project description..."
          onChange={(e) => handleChange(e)}
        ></textarea>
        <Select
          className=""
          // onBlur={handleFormBlur}
          onChange={handleSelectVisibility}
          options={options2}
          value={form.visibility}
        />
        <label>Select the PDF file</label>
        <CreateFile ext={".pdf"} />
        <label>Select the DWG file</label>
        <CreateFile ext={".dwg"} />
        <label>Collaborators</label>
        <Select
          className=""
          // onBlur={handleFormBlur}
          onChange={handleSelectUsers}
          isMulti
          options={options}
          value={form.users}
        />
        <button
          type="submit"
          disabled={
            !form.title ||
            !form.description ||
            !form.pdf_file ||
            !form.visibility ||
            !form.project_file ||
            !form.users ||
            !form.created_by
          }
        >
          SEND
        </button>
      </form>
      <div>
        <div>
          <VisualizePDF url={pdf_get && pdf_get.url} />
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
