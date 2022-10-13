import React from 'react'

function Login(props){

    const LoginOptions = [

    { text: "Login",  handler: () => {} , id: 1 },
    { text: "Register", handler: () => {}, id: 2 },
    { text: "Forgot Password?", handler: () => {}, id: 3 },
  ]

  const LoginOptionsMarkup = LoginOptions.map((option) => (
    <button
      // className="option-button"
      key={option.id}
      className="link-list-item-url"
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (<div className="options-container">{LoginOptionsMarkup}</div>);
};


export default Login