import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const UpdateDetail = ({ update }) => {
  return (
    <div className="grid h-auto my-2 grid-cols-4 w-full bg-gray-100 float-right">
      <div className="m-auto">
        {update.user?.map((userUpdate) => {
          return (
            <div className="w-12 rounded-full">
              <img src={userUpdate.avatar} />
            </div>
          );
        })}
      </div>
      <div className="col-span-2 p-2 w-auto">
        <h2 className="text-xl font-semibold">{update.title}</h2>
        <h3 className="text-base w-full">{update.comments}</h3>
        <h3 className="text-sm w-full">{update.createdAt.substring(0, 10)}</h3>
        <h3 className="text-sm w-full">{update.createdAt.substring(11, 16)}</h3>
      </div>
      <div className="m-auto">
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

export default UpdateDetail;
