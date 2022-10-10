import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/user/userActions";
import UploadPhotos from "../createPost/UploadPhotos";
import Swal from "sweetalert2";

export default function FormEditProfile({ id }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [files, setFiles] = useState([]);
  let image = "";
  //   const [image, setImage] = useState();
  //   console.log("files: ", files);

  const flatFile = files.flat();
  console.log(flatFile);

  function handleChange(e) {
    console.log(state);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  const uploadImage = async (flatFile, e) => {
    // e.preventDefault();
    const data = new FormData();
    console.log(flatFile[0]);
    data.append("file", flatFile[0]);
    data.append("upload_preset", "Arquihub");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfcd64nhm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    // .then((r) => (image = r.secure_url));
    // console.log(image);
    console.log(file);
    // image = await res.json().secure_url;
    image = file.secure_url;
    // console.log(file);
    console.log(image);
  };

  //     const arrayCloud = (data) => {
  //       data.forEach(async (element) => {
  //         const filesCloud = element;
  //         const data = new FormData();
  //         data.append("file", filesCloud[0]);
  //         data.append("upload_preset", "Arquihub");
  //         setLoading(true);
  //         const res = await fetch(
  //           "https://api.cloudinary.com/v1_1/dfcd64nhm/image/upload",
  //           {
  //             method: "POST",
  //             body: data,
  //           }
  //         );
  //         const file = await res.json();
  //         setImage(file.secure_url);
  //         setLoading(false);
  //         const cloudinary = { public_id: file.public_id, url: file.secure_url };
  //         pushCloud.push(cloudinary.url);
  //         setCloudinary(cloudinary);
  //         setForm({
  //           ...form,
  //           ["image"]: pushCloud,
  //         });
  //       });
  //     };

  //     arrayCloud(files);
  //   };

  async function handleEditPerfil() {
    await uploadImage(flatFile);
    const newState = state;
    const imageState = image;
    newState.avatar = imageState;
    console.log(newState);
    // newState.name = "Paula";
    // newState.lastname = "Celman";

    Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(updateUser(id, newState));
        window.location.reload();
        console.log(newState);
        //   if (Object.keys(errors).length === 0) {
        //     dispatch(createPost(displayForm));
        //     setResponse(true);
        //   }
        //   navigate("/home");
        //   setTimeout(() => {
        //     setResponse(null);
        //   }, 2000);
        // Swal.fire("Updated!", "Your profile has been modified.", "success");
      }
    });
  }

  return (
    <div >
      <UploadPhotos files={files} setFiles={setFiles} />
      <input
        className="text-color-slate 300"
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
