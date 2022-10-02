import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import { getAllUsers } from "../../redux/slices/user/userActions";
import { createPost } from "../../redux/slices/post/postActions";

const CreatePost = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    project_type: "",
    mts2: "",
    rooms: "",
    year: "",
    bathrooms: "",
    image: [],
    authors: [],
    additional_data: "",
  });
  const [errors, setErrors] = useState({});
  const [loading] = useState(false);
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

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

  const validationsForm = () => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexWeHeLS = /^[0-9,-]+$/;

    if (Object.keys(form.title.trim()).length === 0) {
      errors.title = "'title' is required";
    }
    if (Object.keys(form.description.trim()).length === 0) {
      errors.description = "'description' is required";
    }
    if (Object.keys(form.project_type.trim()).length === 0) {
      errors.project_type = "'project_type' is required";
    }
    if (Object.keys(form.mts2.trim()).length === 0) {
      errors.mts2 = "'mts2' is required";
    }
    if (Object.keys(form.rooms).length === 0) {
      errors.rooms = "'rooms' is required";
    }
    if (Object.keys(form.year).length === 0) {
      errors.year = "Select any date";
    }
    if (Object.keys(form.image).length === 0) {
      errors.image = "Upload one image at least";
    }
    if (Object.keys(form.bathrooms).length === 0) {
      errors.bathrooms = "'bathrooms' is required";
    }

    return errors;
  };

  let regexWeHeLS = /^[0-9,-]+$/;
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    if (name === "project_type") {
      if (!regexName.test(value)) {
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
    } else if (name === "rooms" || name === "bathrooms") {
      if (!regexWeHeLS.test(value)) {
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
    setErrors(validationsForm(form));
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validationsForm(form));
    if (Object.keys(errors).length === 0) {
      dispatch(createPost(form));
      setResponse(true);
    }
    setForm({
      title: "",
      description: "",
      project_type: "",
      mts2: "",
      rooms: "",
      year: "",
      image: [],
      bathrooms: "",
      authors: [],
      additional_data: "",
    });
    setTimeout(() => {
      setResponse(null);
    }, 2000);
  };

  return (
    <div>
      <div>
        <div>
          <h2>Create Post</h2>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <label>Title</label>

            <input
              type="text"
              name="title"
              placeholder="Title..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.title}
              required
            />

            {!errors.title ? <span></span> : <p>{errors.title}</p>}

            <label>Description</label>

            <textarea
              type="text"
              name="description"
              placeholder="Type any description..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.description}
              requiredcols="30"
              rows="10"
            ></textarea>

            {!errors.description ? <span></span> : <p>{errors.description}</p>}

            <label>Project Type(Apartament, House, Building, etc.)</label>

            <input
              type="text"
              name="project_type"
              placeholder="Type your project_type..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.project_type}
              required
            />

            {!errors.project_type ? (
              <span></span>
            ) : (
              <p>{errors.project_type}</p>
            )}

            <label>mts2(min-max)</label>

            <input
              type="range"
              name="mts2"
              min="100"
              max="10000"
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.mts2}
              required
            />
            <label>{form.mts2}</label>

            {!errors.mts2 ? <span></span> : <p>{errors.mts2}</p>}
            <label>Rooms</label>

            <input
              type="text"
              name="rooms"
              placeholder="Select the amount of rooms..."
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.rooms}
              required
            />

            {!errors.rooms ? <span></span> : <p>{errors.rooms}</p>}

            <label>Year</label>

            <input
              type="date"
              name="year"
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.year}
              required
            />

            {!errors.year ? <span></span> : <p>{errors.year}</p>}

            <label>Bathrooms</label>

            <input
              type="text"
              name="bathrooms"
              placeholder="Select the amount of bathrooms..."
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.bathrooms}
              required
            />

            {!errors.bathrooms ? <span></span> : <p>{errors.bathrooms}</p>}

            <label>Authors</label>
            <Select
              onBlur={handleFormBlur}
              onChange={handleSelectAuthors}
              isMulti
              // key={options.value}
              options={options}
              value={form.authors}
            />
            <label>Image</label>
            <button type="button">Subir Foto</button>

            {/* <div>
             {form.authors?.map((e, index) => {
                return (
                  <input
                    type="button"
                    value={e}
                    key={index}
                    onClick={(e) => handleDeleteAuthors(e)}
                  />
                );
              })}
            </div>
            
            {!errors.authors ? <span></span> : <p>{errors.authors}</p>}
            
            <select
              id="select"
              name="authors"
              onChange={(e) => handleSelectAuthors(e)}
            >
              {allUsers?.map((author) => {
                return (
                  <option key={author._id} value={author.nickname}>
                    {author.name}
                  </option>
                );
              })}
            </select> */}

            <label>Additional Data</label>

            <textarea
              type="text"
              name="additional_data"
              placeholder="Type your additional data"
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.additional_data}
              requiredcols="30"
              rows="10"
            ></textarea>

            {!errors.additional_data ? (
              <span></span>
            ) : (
              <p>{errors.additional_data}</p>
            )}

            <button
              id="send"
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
