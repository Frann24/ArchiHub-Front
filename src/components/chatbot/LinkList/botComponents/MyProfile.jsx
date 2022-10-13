import React from 'react'

function MyProfile(props){

    const MyProfileOptions = [

    { text: "Go to my Dashboard",  handler: () => {} , id: 1 },
    { text: "MyPosts", handler: () => {}, id: 2 },
    { text: "MyProjects", handler: () => {}, id: 3 },
  ]

  const MyProfileOptionsMarkup = MyProfileOptions.map((option) => (
    <button
    className="link-list-item-url"
    key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));
    console.log(props);
  return (<div className="options-container">{MyProfileOptionsMarkup}</div>);
};


export default MyProfile