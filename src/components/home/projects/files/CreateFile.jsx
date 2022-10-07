import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStorage,
  deleteStorage,
} from "../../../../redux/slices/storage/storageActions";


const CreateFile = ({ext}) => {
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const fileData = useSelector((state) => state.storage.response.newStorage);
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    const data = new FormData();
    data.append("file", file);
    dispatch(createStorage(data));
  };
  console.log(fileData);
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteStorage(fileData._id));
  };

  return (
    <div>
        <input
          type="file"
          onChange={handleOnChange}
          name="myFile"
          accept={ext}
        />
        <button onClick={(e) => handleDelete(e)} disabled={!fileData}>
          X
        </button>
    </div>
  );
};

export default CreateFile;
