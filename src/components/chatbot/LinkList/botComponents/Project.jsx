import React from 'react'

function Project(props){

    const ProjectOptions = [
    { text: "Create Project",  handler: () => {} , id: 1 },
    { text: "Update Project ", handler: () => {}, id: 2 },
    { text: "Create Post",  handler: () => {} , id: 3 },
    { text: "Update Post ", handler: () => {}, id: 4 },
  ]

  const ProjectOptionsMarkup = ProjectOptions.map((option) => (
    <button
    className="link-list-item-url"
    key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (<div className="options-container">{ProjectOptionsMarkup}</div>);
};

export default Project
