import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProject } from "../../../redux/slices/project/projectActions";
import { getUser } from "../../../redux/slices/user/userActions";
import Loader from "../../loader/Loader";
import UpdateDetail from "./update/UpdateDetail";
import UpdateDetailCollab from "./update/UpdateDetailCollab";
import ProjectFile from "./files/ProjectFile";
import CreateUpdate from "./forms/CreateUpdate";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.project);

  useEffect(() => {
    dispatch(getProject(id));
    dispatch(getUser(project.created_by));
  }, [dispatch]);


  return (
    <div>
      <div>
        {project.length === 0 ? (
          <Loader />
        ) : (
          <div>
            <div>
              <h1>{project.title}</h1>
              <h2>{project.description}</h2>
              {project.users?.map((user) => {
                return (
                  <div>
                    <p>{user.nickname}</p>
                    <p>{user.email}</p>
                  </div>
                );
              })}
              <div>
                {project.initial_file?.map((file) => {
                  return (
                    <ProjectFile file={file}/>
                  );
                })}
              </div>
              <div>
                {project.updates?.map((update) => {
                  return (
                    <div>
                      {update.user[0]._id === update.project[0].created_by ? (
                        <UpdateDetail update={update} />
                      ) : (
                        <UpdateDetailCollab update={update} />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <CreateUpdate />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;