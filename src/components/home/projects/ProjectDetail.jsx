import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProject } from "../../../redux/slices/project/projectActions";
import { getUser } from "../../../redux/slices/user/userActions";
import Loader from "../../loader/Loader";
import UpdateDetail from "./update/UpdateDetail";
import UpdateDetailCollab from "./update/UpdateDetailCollab";
import ProjectFile from "./files/ProjectFile";
import CreateUpdate from "./forms/CreateUpdate";
import VisualizePDF from "./VisualizePDF";

const ProjectDetail = () => {
  const response = useSelector((state) => state.update.response)
  const responseDownload = useSelector((state)=>state.download.response)
  const { id } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.project.project);

  useEffect(() => {
    dispatch(getProject(id));
  }, [dispatch,response,responseDownload]);
  return (
    <div>
      <div
        className="m-4
      md:mx-8
      lg:mx-16
      xl:mx-32
      2xl:mx-64
      "
      >
        {project.length === 0 ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <Loader />
          </div>
        ) : (
          <div>
            <div>
              <div>
                <VisualizePDF
                  url={project && project.pdf_initial_file[0].url}
                />
              </div>
              <div className="flex w-auto h-auto justify-center item-start flex-col 
                    md:w-auto lg:border lg:p-4">
                <h1 className="text-xl font-bold">{project.title}</h1>
                <h2 className="font-medium">{project.description}</h2>
                <p className="my-2">Collaborators</p>
                <div className="flex flex-col md:flex-row">
                  {project.users?.map((user) => {
                    return (
                      <div>
                        <Link to={`/user/${user._id}`}>
                          <div
                            className="flex w-full items-center my-2 border shadow-md
                            md:w-fit md:pr-2
                            "
                          >
                            <img
                              src={`${user.avatar}`}
                              // alt={user.nickname}
                              className="rounded-full w-8 m-2"
                            />
                            <p className="">{user.nickname}</p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div>
                {project.initial_file?.map((file) => {
                  return <ProjectFile file={file} />;
                })}
              </div>
              <div>
                {project.updates?.map((update, index) => {
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
            <div>
              <CreateUpdate project_id={project._id} project={project}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
