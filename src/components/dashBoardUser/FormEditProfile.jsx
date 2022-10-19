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
  const [state, setState] = useState({
    nickname: user.nickname,
    description: user.description,
  });
  const [files, setFiles] = useState([]);
  console.log("state: ", state);
  console.log(files);

  let image = "";

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
    console.log(flatFile);
    data.append("file", flatFile);
    data.append("upload_preset", "Arquihub");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfcd64nhm/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    return file.secure_url;
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
      acceptedFiles.map(async (e) => {
        const fileImage = await uploadImage(e);
        setState({
          ...state,
          ["avatar"]: fileImage,
        });
      });
    },
  });

  async function handleEditPerfil() {
    console.log(state);
    const profile = dispatch(updateUser(id, state));
    console.log(profile);
    // window.location.reload();
  }

  return (
    <div className="ml-32">
      <div className="flex flex-col-2 mb-12 w-full gap-20">
        <div {...getRootProps()} className="relative ">
          <input {...getInputProps()} />
          <div className="w-60 h-60 relative ">
            <img
              // src={`${user.avatar}`}
              width="240px"
              height="240px"
              src={files[0] ? files[files.length - 1][0].preview : user.avatar}
              className="rounded-full mt-16 opacity-50"
            />
          </div>
          <div className="absolute bottom-20 left-12">
            <div className="  font-bold ">drop image here</div>
          </div>
        </div>
        <div className=" flex flex-col ">
          <div className="font-bold text-lg capitalize mt-12">
            {user.name} {user.lastname}
          </div>
          <input
            className=""
            placeholder="Nickname"
            name="nickname"
            value={state.nickname}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            placeholder="description"
            name="description"
            // value={state.description}
            onChange={(e) => handleChange(e)}
          ></input>
          <div className="flex flex-row my-3">
            <div className="pr-4">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <input
              placeholder={state.location ? state.location : "Location"}
              name="location"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
          <div className="flex flex-row my-3">
            <div className="pr-4">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <input
              placeholder="Job Title"
              name="job"
              onChange={(e) => handleChange(e)}
            ></input>
          </div>

          <div className="flex flex-row my-3">
            <div className="pr-4">
              <FontAwesomeIcon icon={faLink} />
            </div>

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
