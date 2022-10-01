import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";

const CreatePost = () => {
  const [form, setForm] = useState({
    title: "qqwe",
    description: "qweqweqw",
    project_type: "qweqwe",
    mts2: "500",
    rooms: "6",
    year: "",
    bathrooms: "3",
    authors: [],
    additional_data: "qweqwfqwdqwd",
  });
  const [errors, setErrors] = useState({});
  const [loading] = useState(false);
  const [response, setResponse] = useState(null);
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.users.users);
  useEffect(() => {

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
      
      setResponse(true);
    }
    setForm({
      title: "",
      description: "",
      project_type: "",
      mts2: "",
      rooms: "",
      year: "",
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
            <br />
            <input
              type="text"
              name="title"
              placeholder="Title..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.title}
              required
            />
            <br></br>
            {!errors.title ? <span></span> : <p>{errors.title}</p>}
            <br></br>
            <label>Description</label>
            <br />
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
            <br></br>
            {!errors.description ? <span></span> : <p>{errors.description}</p>}
            <br></br>
            <label>Project Type(Apartament, House, Building, etc.)</label>
            <br />
            <input
              type="text"
              name="project_type"
              placeholder="Type your project_type..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.project_type}
              required
            />
            <br></br>
            {!errors.project_type ? (
              <span></span>
            ) : (
              <p>{errors.project_type}</p>
            )}
            <br></br>
            <label>mts2(min-max)</label>
            <br />
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
            <br></br>
            {!errors.mts2 ? <span></span> : <p>{errors.mts2}</p>}
            <label>Rooms</label>
            <br />
            <input
              type="text"
              name="rooms"
              placeholder="Select the amount of rooms..."
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.rooms}
              required
            />
            <br />
            {!errors.rooms ? <span></span> : <p>{errors.rooms}</p>}
            <br />
            <label>Year</label>
            <br />
            <input
              type="date"
              name="year"
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.year}
              required
            />
            <br />
            {!errors.year ? <span></span> : <p>{errors.year}</p>}
            <br />
            <label>Bathrooms</label>
            <br />
            <input
              type="text"
              name="bathrooms"
              placeholder="Select the amount of bathrooms..."
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.bathrooms}
              required
            />
            <br />
            {!errors.bathrooms ? <span></span> : <p>{errors.bathrooms}</p>}
            <br />
            <label>Authors</label>
            <Select
              onBlur={handleFormBlur}
              onChange={handleSelectAuthors}
              isMulti
              // key={options.value}
              options={options}
              value={form.authors}
            />
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
            <br></br>
            {!errors.authors ? <span></span> : <p>{errors.authors}</p>}
            <br></br>
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
            <br></br>
            <label>Additional Data</label>
            <br />
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
            <br></br>
            {!errors.additional_data ? (
              <span></span>
            ) : (
              <p>{errors.additional_data}</p>
            )}
            <br></br>
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
