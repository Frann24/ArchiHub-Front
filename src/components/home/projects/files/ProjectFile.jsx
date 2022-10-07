import React from "react";
import img from "../../../../assets/icons/dwg.png";

const ProjectFile = ({file}) => {
  return (
    <div>
      <a href={file.url} target="blank">
        <img src={img} alt="dwg_file" />
      </a>
      <p>{file.originalname}</p>
      <p>{file.createdAt.substring(0, 10)}</p>
      <p>{file.createdAt.substring(11, 16)}</p>
    </div>
  );
};

export default ProjectFile;
