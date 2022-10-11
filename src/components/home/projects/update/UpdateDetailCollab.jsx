import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const UpdateDetailCollab = ({ update }) => {
  return (
    <div className="grid my-4 grid-cols-4 w-full bg-gray-50 shadow-lg 
    md:w-3/4 md:float-left">
      <div className="m-auto">
        {update.user?.map((userUpdate) => {
          return (
            <div className="w-12">
              <img src={`${userUpdate.avatar}`} className="rounded-full"/>
            </div>
          );
        })}
      </div>
      <div className="col-span-2 p-2 w-auto">
        <div className="md:flex md:flex-row">
          <h2 className="text-xl w-screen font-semibold">{update.title}</h2>
          <h3 className="text-xs w-full  md:ml-2 md:w-96">
            {update.createdAt.substring(0, 10)}
          </h3>
          <h3 className="text-xs w-full">
            {`${update.createdAt.substring(11, 16)}hs`}
          </h3>
        </div>
        <h3 className="text-base w-full">{update.comments}</h3>
      </div>
      <div className="m-auto">
        {update.storage?.map((updateStorage) => {
          return (
            <div>
              <a href={updateStorage.url} target="blank">
                <FontAwesomeIcon icon={faDownload} className="text-2xl"/>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UpdateDetailCollab;
