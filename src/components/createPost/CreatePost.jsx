import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import { getAllUsers } from "../../redux/slices/user/userActions";
import { createPost } from "../../redux/slices/post/postActions";
import infoTypePost from "../../api/projectTypeData";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { validationsForm } from "./validatePost";

const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const userToken = JSON.parse(window.localStorage.getItem("token"));

  const [form, setForm] = useState({
    title: "",
    description: "",
    project_type: [],
    mts2: "",
    rooms: "",
    year: "",
    bathrooms: "",
    image: [],
    authors: [],
    additional_data: "",
    created_by: userToken ? userToken.userId : "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  const options = allUsers.map((e) => {
    return {
      value: e._id,
      label: e.nickname,
    };
  });
  const handleSelectAuthors = (value) => {
    setForm({
      ...form,
      authors: value,
    });
  };

  const options2 = infoTypePost?.map((e, index) => {
    return {
      id: index,
      value: e.value,
      label: e.name,
    };
  });
  const handleSelectType = ({ value }) => {
    setForm({
      ...form,
      project_type: value,
    });
  };
  const images =
    form.image.flat()?.map((element) => (
      <div key={element.public_id}>
        <div>
          <img src={element.url} style={{ width: "200px" }} alt="preview" />
          <button onClick={(e) => handleDelete(element, e)}>X</button>
        </div>
      </div>
    ));

  const handleFormChange = (e) => {
    let regexNum = /^[0-9,-]+$/;
    const { name, value } = e.target;
    if (name === "rooms" || name === "bathrooms") {
      if (!regexNum.test(value)) {
        setForm({
          ...form,
          [name]: "",
        });
      } else {
        setForm({
          ...form,
          [name]: value,
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleFormBlur = (e) => {
    handleFormChange(e);
    setErrors(validationsForm(form, e.target.name, errors));
  };
  const handleDelete = (element, e) => {
    e.preventDefault();
    let afterDelete = form.image.flat().filter(
      (e) => e.public_id !== element.public_id
    );
    setForm({
      ...form,
      ["image"]: afterDelete,
    });
  };
  const uploadImage = async (files) => {
    console.log(form.image);
    const data = new FormData();
    data.append("file", files);
    data.append("upload_preset", "Arquihub");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfcd64nhm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setLoading(false);
    const cloudinary = { public_id: file.public_id, url: file.secure_url };
    return cloudinary;
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      const photos = [];
      acceptedFiles.map(async (e) => {
        const pedro = await uploadImage(e);
        photos.push(pedro);
        setForm({
          ...form,
          ["image"]: [...form.image, photos],
        });
      });
    },
  });

  const handleFormSubmit = async (files, e) => {
    e.preventDefault();
    const displayForm = form;

    if (Object.keys(errors).length === 0) {
      dispatch(createPost(displayForm));
      setResponse(true);
    }
    setForm({
      title: "",
      description: "",
      project_type: [],
      mts2: "",
      rooms: "",
      year: "",
      image: [],
      bathrooms: "",
      authors: [],
      additional_data: "",
    });
    navigate("/home");
  };

  return (
    <div className="flex flex-row my-8">
      <form
        onSubmit={(e) => handleFormSubmit(files, e)}
        className="w-full md:w-1/2"
      >
        <div
          className="mx-4
        md:mx-8
        lg:mx-16
        xl:mx-32
        2xl:mx-64"
        >
          <label>Title</label>
          <input
            className={`w-full border-b-2 my-2 p-2  ${
              errors.title && "border-2 focus:border-danger border-danger"
            }
            `}
            type="text"
            name="title"
            placeholder="Title of the project..."
            onBlur={handleFormBlur}
            onChange={(e) => handleFormChange(e)}
            value={form.title}
          />
          {errors.title && (
            <span className="text-danger text-sm my-1 block">
              {errors.title}
            </span>
          )}

          <label>Description</label>

          <textarea
            className={`w-full border-b-2 my-2 p-2  ${
              errors.description && "border-2 focus:border-danger border-danger"
            }
            `}
            type="text"
            name="description"
            placeholder="Type a description..."
            onBlur={(e) => handleFormBlur(e)}
            onChange={(e) => handleFormChange(e)}
            value={form.description}
            requiredcols="30"
            rows="10"
          ></textarea>

          {errors.description && (
            <span className="text-danger text-sm my-1 block">
              {errors.description}
            </span>
          )}

          <label>mts2</label>
          <div className="flex flex-row">
            <input
              className={`w-full ${
                errors.mts2 && "border-2 focus:border-danger border-danger"
              }
            `}
              type="range"
              name="mts2"
              min="100"
              max="10000"
              step="10"
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.mts2}
              required
            />
            <input
              type="text"
              placeholder={form.mts2}
              maxLength="5"
              className="w-16 mx-2"
              name="mts2"
              onBlur={(e) => handleFormBlur(e)}
              value={form.mts2}
              onChange={(e) => handleFormChange(e)}
            />
          </div>
          {errors.mts2 && (
            <span className="text-danger text-sm my-1 block">
              {errors.mts2}
            </span>
          )}
          <label>Project Type</label>
          <Select
            className={`w-full my-2 p-2  ${
              errors.project_type &&
              "border-2 focus:border-danger border-danger"
            }
          `}
            // onBlur={handleFormBlur}
            onChange={handleSelectType}
            options={options2}
            value={form.project_type.value}
          />

          {errors.project_type && (
            <span className="text-danger text-sm my-1 block">
              {errors.project_type}
            </span>
          )}
          <div>
            <div className="">
              <label className="">Year</label>
              <input
                className={`w-full my-2 p-2  ${
                  errors.year && "border-2 focus:border-danger border-danger"
                }
              `}
                type="date"
                name="year"
                onBlur={handleFormBlur}
                onChange={handleFormChange}
                value={form.year}
              />
              {errors.year && (
                <span className="text-danger text-sm my-1 block">
                  {errors.year}
                </span>
              )}
              {(form.project_type === "Residential Architecture" || form.project_type === "Interior Design")&& (
                  <div>
                    <label className="">Rooms</label>
                    <input
                      className={`w-full my-2 p-2  ${
                        errors.rooms &&
                        "border-2 focus:border-danger border-danger"
                      }
                `}
                      type="text"
                      name="rooms"
                      placeholder="Amount..."
                      onBlur={handleFormBlur}
                      onChange={handleFormChange}
                      value={form.rooms}
                    />
                    {errors.rooms && (
                      <span className="text-danger text-sm my-1 block">
                        {errors.rooms}
                      </span>
                    )}

                    <label className="">Bathrooms</label>
                    <input
                      className={`w-full my-2 p-2  ${
                        errors.bathrooms &&
                        "border-2 focus:border-danger border-danger"
                      }
                `}
                      type="text"
                      name="bathrooms"
                      placeholder="Amount..."
                      onBlur={handleFormBlur}
                      onChange={handleFormChange}
                      value={form.bathrooms}
                    />

                    {errors.bathrooms && (
                      <span className="text-danger text-sm my-1 block">
                        {errors.bathrooms}
                      </span>
                    )}
                  </div>
                )}
            </div>
          </div>
          <div className="">Collaborators:</div>
          <Select
            className=""
            // onBlur={handleFormBlur}
            onChange={handleSelectAuthors}
            isMulti
            options={options}
            value={form.authors}
          />
          <div className="">Images</div>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className="w-62 h-40 bg-white mt-6  ">
              <div className=" text-center pt-6">
                Drop your files here{" "}
              </div>
              <div className=" text-center pt-6">
                {" "}
                or click to choose from your folders
              </div>
              <div className="grid grid-cols-3">
                <div className="   text-center py-1 w-50% "> </div>

                <div className=" bg-slate-200   text-center mt-2 py-1 w-50% ">
                  {" "}
                  +
                </div>
                <div className="   text-center py-1 w-50% "> </div>
              </div>
            </div>
          </div>
          <div className="mx-2 my-2 w-40">{images}</div>

          <div className="">Additional Data</div>

          <textarea
            className=""
            type="text"
            name="additional_data"
            placeholder="Type additional data"
            onBlur={(e) => handleFormBlur(e)}
            onChange={(e) => handleFormChange(e)}
            value={form.additional_data}
            requiredcols="30"
            rows="2"
          ></textarea>
          <button
            className=""
            id="send"
            type="submit"
            disabled={Object.keys(errors).length !== 0}
          >
            <span>Create</span>
          </button>
        </div>
      </form>
      <div className="hidden w-1/2 p-16 border-l-2 md:flex md:justify-center md:items-center md:text-5xl">
        <h1>If you can imagine, Arquihub helps you to make it.</h1>
      </div>
    </div>
  );
};

export default CreatePost;
