import React, { useState } from "react";
import "./Options.css"

const Options = (props) => {

  const [input, setInput]= useState("")


  const options = [
    // {
    //   text:"Links",
    //   handler: props.actionProvider.handleLinkList,
    //   id:1
    // },
    { text: "Log In", handler: props.actionProvider.handleLinkList , id: 1 },
    { text: "Register Account", handler: () => {}, id: 2 },
    { text: "Suscribe", handler: () => {}, id: 3 },
    { text: "News", handler: () => {}, id: 4 },
    { text: "Projects", handler: () => {}, id: 5 },
    { text: "Posts", handler: () => {}, id: 6 },
    { text: "My Profile", handler: () => {}, id: 7 },
  ];
  const optionsMarkup = options.map((option) => (
    <button
    className="option-button"
    key={option.id}
    onClick={option.handler}
    >
      {option.text}
    </button>
  ));
  
  // console.log(optionsMarkup);
  return <div className="options-container">{optionsMarkup}</div>;
};

export default Options;


