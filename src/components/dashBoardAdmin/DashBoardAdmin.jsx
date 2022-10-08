import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/user/userActions";
import { updateUser } from "../../redux/slices/user/userActions";
import { useState } from "react";
import UserItem from "./UserItem";

function DashBoardAdmin() {
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  //   useEffect(() => {
  //     dispatch(getAllUsers());
  //   }, [handleClick]);

  console.log(allUsers);
  function handleChangeStatus(id, e) {
    dispatch(updateUser(id, { status: e.target.value }));
  }

  //   function handleClick(e) {
  //     if (e.show === true) {
  //       e.show = false;
  //       console.log("e.show: ", e.show);
  //       console.log("nombre: ", e.name);
  //       return;
  //     }

  //     if (e.show === false) {
  //       e.show = true;
  //       console.log("e.show: ", e.show);
  //       console.log("e.nombre: ", e.name);
  //       return;
  //     }
  //   }

  return (
    <div className=" ml-6">
      {/* ----------------pantallas LARGE------------------- */}

      <div className="lg:block hidden">
        <div className=" grid grid-cols-3 sm:grid-cols-6 mt-6 gap-6  font-bold">
          <h2>Members</h2>
          <h2>eMail</h2>
          <h2>Posts</h2>
          <h2>Proyects</h2>
          <h2>Type</h2>
          <h2>Status</h2>
        </div>
        {allUsers.length &&
          allUsers.map((el) => {
            const statusUser = el.status;
            const statusOptions = [];
            statusUser === "active" && statusOptions.push("banned", "inactive");
            statusUser === "banned" && statusOptions.push("active", "inactive");
            statusUser === "inactive" && statusOptions.push("banned", "active");

            return (
              <div>
                <div className="grid grid-cols-3 sm:grid-cols-6  mt-6 gap-4">
                  {/* <h1>{el._id}</h1> */}

                  {el.name ? (
                    <h2 className="font-bold">{el.name} </h2>
                  ) : (
                    <p className="text-slate-300">Member</p>
                  )}
                  <div className="truncate">{el.email}</div>
                  <div>{el.posts.length}</div>
                  <div>{el.projects.length === 0 ? 0 : el.projects.length}</div>
                  <div>{el.type}</div>

                  <select
                    className="bg-slate-200 text-center"
                    onChange={(e) => handleChangeStatus(el._id, e)}
                  >
                    <option disabled selected defaultValue>
                      {statusUser}
                    </option>
                    <option value={statusOptions[0]}>{statusOptions[0]}</option>
                    <option value={statusOptions[1]}>{statusOptions[1]}</option>
                  </select>
                </div>
              </div>
            );
          })}
      </div>

      {/* ----------------pantallas MEDIUM------------------- */}

      <div className="lg:hidden md:block hidden">
        <div className=" grid grid-cols-3 sm:grid-cols-6 mt-6 gap-6  font-bold">
          <h2>Members</h2>
          <h2>Mail</h2>
          <h2>Posts</h2>
          <h2>Proyects</h2>
          <h2>Type</h2>
          <h2>Status</h2>
        </div>
        {allUsers.length &&
          allUsers.map((el) => {
            const statusUser = el.status;
            const statusOptions = [];
            statusUser === "active" && statusOptions.push("banned", "inactive");
            statusUser === "banned" && statusOptions.push("active", "inactive");
            statusUser === "inactive" && statusOptions.push("banned", "active");

            return (
              <div>
                <div className="grid grid-cols-3 sm:grid-cols-6  mt-6 gap-4">
                  {/* <h1>{el._id}</h1> */}

                  {el.name ? (
                    <h2 className="font-bold">{el.name} </h2>
                  ) : (
                    <p className="text-slate-300">Member</p>
                  )}
                  <h2 className="truncate">{el.email}</h2>
                  <h2>{el.posts.length}</h2>
                  <h2>{el.projects.length === 0 ? 0 : el.projects.length}</h2>
                  <h2>{el.type}</h2>

                  <select
                    className="bg-slate-200 "
                    onChange={(e) => handleChangeStatus(el._id, e)}
                  >
                    <option disabled selected defaultValue>
                      {statusUser}
                    </option>
                    <option value={statusOptions[0]}>{statusOptions[0]}</option>
                    <option value={statusOptions[1]}>{statusOptions[1]}</option>
                  </select>
                </div>
              </div>
            );
          })}
      </div>

      {/* ---------esta es la parte SMALL---------- */}

      <div className="block sm:hidden">
        <div className=" grid grid-cols-2  font-bold">
          <h2>Members</h2>
          <h2>Mail</h2>
        </div>
        {allUsers.length &&
          allUsers.map((el) => {
            // const statusUser = el.status;

            // const newEl = { ...el, show: false };
            // const statusOptions = [];
            // statusUser === "active" && statusOptions.push("banned", "inactive");
            // statusUser === "banned" && statusOptions.push("active", "inactive");
            // statusUser === "inactive" && statusOptions.push("banned", "active");

            return (
              <div>
                <UserItem el={el} handleChangeStatus={handleChangeStatus} />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DashBoardAdmin;
