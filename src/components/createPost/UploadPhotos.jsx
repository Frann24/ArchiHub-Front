import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadPhotos() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.careateObjectURL(file),
          })
        )
      );
    },
  });
  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <p>Drop files here</p>
      </div>
      <div>{images}</div>
    </div>
  );
}
