import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slices/user/userActions";
import UploadPhotos from "./UploadPhotos";
import Swal from "sweetalert2";
import { useDropzone } from "react-dropzone";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export default function FormEditProfile({ id, user }) {
  const dispatch = useDispatch();
  const [state, setState] = useState({});
  const [files, setFiles] = useState([]);
  console.log(files);

  let image = "";
  //   const [image, setImage] = useState();
  //   console.log("files: ", files);
  const [isHovering, setIsHoverig] = useState(false);

  function handleMouseEnter() {
    setIsHoverig(true);
  }
  function handleMouseLeave() {
    setIsHoverig(false);
  }
  function textClass() {
    return `absolute top-10 left-5 w-100% h-100% text-white flex flex-col content-center text-center justify-self-center ${
      isHovering ? "" : "hidden"
    }`;
  }
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

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles([
        ...files,
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
    },
  });

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
    <div className="ml-32">
      <div className="flex flex-col-2 mb-12 w-full gap-20">
        <div {...getRootProps()} className="relative w-40 h-40">
          <input {...getInputProps()} />

          <img
            // src={`${user.avatar}`}
            src={files[0] ? files[0][0].preview : user.avatar}
            className="rounded-full mt-16"
          />
          {/* <div className="">
            <div className="  font-bold ">drop image</div>
            <div className="  mt-2 ">inside de circle</div>
          </div> */}
        </div>
        <div className=" flex flex-col ">
          <div className="font-bold text-lg capitalize mt-12">
            {user.name} {user.lastname}
          </div>
          <input
            className=""
            placeholder="Nickname"
            name="nickname"
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            placeholder="Description"
            name="description"
            onChange={(e) => handleChange(e)}
          ></input>
          <div className="flex flex-row my-3">
            <FontAwesomeIcon icon={faLocationDot} />
            <input
              placeholder="Location"
              name="location"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="flex flex-row my-3">
            <FontAwesomeIcon icon={faBuilding} />
            <input
              placeholder="Job Title"
              name="job"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="flex flex-row">
            <FontAwesomeIcon icon={faLink} />
            <input
              placeholder="Webpage"
              name="page"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <button
            className="bg-slate-300 cursor-pointer w-32 h-8 mt-6"
            onClick={() => handleEditPerfil()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
