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
  const uploadImage = async (e) => {
    console.log(e.target.file);
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Arquihub");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfcd64nhm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file.secure_url);
    if (file.secure_url !== undefined) {
      setForm({ ...form, image: [...form.image, file.secure_url] });
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
    <div className="grid grid-cols-2 bg-slate-100">
      <div>
        <div className="md:container px-10 py-4 bg-slate-100">
          <h2 className="text-2xl mb-8">Create Post</h2>
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <label className="text-2xl">Title</label>
            <span className="block font-bold text-slate-700 text-2x1 ">
              <input
                className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-400 invalid:border-4"
                type="text"
                name="title"
                placeholder="Title of the project..."
                onBlur={(e) => handleFormBlur(e)}
                onChange={(e) => handleFormChange(e)}
                value={form.title}
                required
              />
            </span>

            {!errors.title ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">{errors.title}</p>
            )}

            <div className="text-2xl mt-6">Description</div>

            <textarea
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-400 invalid:border-4"
              type="text"
              name="description"
              placeholder="Type a description..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.description}
              requiredcols="30"
              rows="10"
            ></textarea>

            {!errors.description ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">{errors.description}</p>
            )}

            <label className="text-2xl">
              Project Type(Apartament, House, Building, etc.)
            </label>

            <input
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              type="text"
              name="project_type"
              placeholder="Type your project type..."
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.project_type}
              required
            />

            {!errors.project_type ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">
                {errors.project_type}
              </p>
            )}

            <div className="text-2xl mt-6">mts2(min-max)</div>

            <input
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
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

            {!errors.mts2 ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">{errors.mts2}</p>
            )}
            <div className="text-2xl mt-8">Rooms</div>

            <input
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              type="text"
              name="rooms"
              placeholder="Amount of rooms..."
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.rooms}
              required
            />

            {!errors.rooms ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">{errors.rooms}</p>
            )}

            <label className="text-2xl">Bathrooms</label>

            <input
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              type="text"
              name="bathrooms"
              placeholder="Amount of bathrooms..."
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.bathrooms}
              required
            />
            {!errors.bathrooms ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">{errors.bathrooms}</p>
            )}

            <label className="text-2xl">Year</label>

            <input
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              type="date"
              name="year"
              onBlur={handleFormBlur}
              onChange={handleFormChange}
              value={form.year}
              required
            />

            {!errors.year ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">{errors.year}</p>
            )}

            <div className="text-2xl mt-6">Authors</div>
            <Select
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              onBlur={handleFormBlur}
              onChange={handleSelectAuthors}
              isMulti
              options={options}
              value={form.authors}
            />
            <div className="text-2xl mt-6">Image</div>

            <input
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              id="exampleFile"
              name="file"
              type="file"
              onChange={uploadImage}
            />

            <div className="text-2xl mt-6">Additional Data</div>

            <textarea
              className="mt-1 w-full px-3 py-2 text-2xl bg-white border border-slate-200 rounded-md shadow-sm placeholder:slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 invalid:border-red-600 invalid:border-4"
              type="text"
              name="additional_data"
              placeholder="Type additional data"
              onBlur={(e) => handleFormBlur(e)}
              onChange={(e) => handleFormChange(e)}
              value={form.additional_data}
              requiredcols="30"
              rows="10"
            ></textarea>

            {!errors.additional_data ? (
              <span></span>
            ) : (
              <p className="text-2xl mb-6 text-red-400">
                {errors.additional_data}
              </p>
            )}

            <button
              className="bg-gray-200 text-2xl mt-12 py-4 px-8 rounded-xl hover:bg-opacity-50 flex items-center group "
              id="send"
              type="submit"
              disabled={Object.keys(errors).length !== 0}
            >
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
      <div>
        <div>
          {
            <div>
              <div className="text-2xl mt-6">Title of the project: </div>
              <div className="text-2xl font-bold mb-6">{form.title}</div>
              <div className="text-2xl mt-6">Description: </div>
              <div className="text-2xl font-bold mb-6">{form.description}</div>
              <div className="text-2xl mb-6">Type of project: </div>
              <div className="text-2xl font-bold mb-6">{form.project_type}</div>
              <div className="text-2xl mt-6">Mts2: </div>
              <div className="text-2xl font-bold mb-6">{form.mts2}</div>
              <div className="text-2xl mt-6">Year of construction: </div>
              <div className="text-2xl font-bold mb-6">{form.year}</div>
              <div className="text-2xl mt-6">Amount of rooms: </div>
              <div className="text-2xl font-bold mb-6">{form.rooms}</div>
              <div className="text-2xl mt-6">Amount of bathrooms: </div>
              <div className="text-2xl font-bold mb-6">{form.bathrooms}</div>
              <div className="text-2xl mt-6">Additional information: </div>
              <div className="text-2xl font-bold mb-6">
                {form.additional_data}
              </div>
            </div>
          }
        </div>
        <div>
          {form.image?.map((e) => {
            return <img src={e} alt={e} width="300px" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
