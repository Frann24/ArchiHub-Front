import React from "react";
import { useState } from "react";
import CreateFile from "../files/CreateFile";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../../redux/slices/user/userActions";
import { useEffect } from "react";

const CreateProject = () => {

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const fileData = useSelector((state) => state.storage.response);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  
  
  const [form, setForm] = useState({
    title: "",
    description: "",
    visibility: "",
    created_by: "",
    users: "",
    pdf_file: "",
    project_file: "",
  });
  console.log(fileData.newStorage ? fileData.newStorage.filename.split(".").pop() : "noexiste" );

  useEffect(() => {
    if (fileData.newStorage && fileData.newStorage.filename.split(".").pop() === "pdf") {
      fileData.newStorage && setForm({...form, pdf_file: fileData.newStorage._id}) 
    } else {
      fileData.newStorage && setForm({...form, project_file: fileData.newStorage._id}) 
    }
  }, [fileData])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name] : value
    })
  }
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
  return (
    <div>
      <form>
        <label>Title</label>
        <input type="text" placeholder="Title..." onChange={handleChange}/>
        <label>Description</label>
        <textarea name="description" cols="30" rows="10" placeholder="Type the project description..." onChange={handleChange}>
        </textarea>
        <Select
          className=""
          // onBlur={handleFormBlur}
          onChange={handleSelectVisibility}
          options={options2}
          value={form.visibility}
        />
        <label>Select the PDF file</label>
        <CreateFile ext={".pdf"}/>
        <label>Select the DWG file</label>
        <CreateFile ext={".dwg"}/>
        <label>Collaborators</label>
        <Select
          className=""
          // onBlur={handleFormBlur}
          onChange={handleSelectUsers}
          isMulti
          options={options}
          value={form.users}
        />
      </form>
    </div>
  );
};

export default CreateProject;
