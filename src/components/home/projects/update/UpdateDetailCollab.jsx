import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const UpdateDetailCollab = ({ update }) => {
  return (
    <div className="float-left">
      <h2>{update.title}</h2>
      <h3>{update.comments}</h3>
      <h3>{update.createdAt.substring(0, 10)}</h3>
      <h3>{update.createdAt.substring(11, 16)}</h3>
      <div>
        {update.user?.map((userUpdate) => {
          return (
            <div>
              <p>{userUpdate.nickname}</p>
            </div>
          );
        })}
      </div>
      <div>
        {update.storage?.map((updateStorage) => {
          return (
            <div>
              <a href={updateStorage.url} target="blank">
                <FontAwesomeIcon icon={faDownload} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdateDetailCollab;
