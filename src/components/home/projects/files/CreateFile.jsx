import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStorage,
  deleteStorage,
} from "../../../../redux/slices/storage/storageActions";

const CreateFile = ({ ext, setForm, storage_id }) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.storage.response.newStorage);

  const handleOnChange = (e) => {
    console.log(e.target.files)
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    dispatch(createStorage(data));
  };
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteStorage(fileData._id));
    setForm({
      storage_id: ""
    })
  };

  return (
    <div className="flex flex-row">
      <div className="flex text-white justify-center items-center p-2 w-60 mb-4 bg-gray-900 shadow-lg
      sm:w-96
      hover:bg-gray-800
      md:w-20 md:bg-white
      ">
        <input
          type="file"
          onChange={(e) => handleOnChange(e)}
          name="myFile"
          accept={ext}
          value={storage_id}
          className="opacity-0 absolute"
        />
        <FontAwesomeIcon icon={faUpload} className="ml-8 text-xl md:ml-0 md:text-black"/>
      </div>
      <button
        onClick={(e) => handleDelete(e)}
        disabled={!fileData}
        className="mb-4 bg-gray-900 text-white text-bold w-8 hover:bg-red-700 shadow-lg
        md:text-black md:bg-white
        "
      >
        X
      </button>
    </div>
  );
};

export default CreateFile;
