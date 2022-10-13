import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit';
import { useNavigate } from 'react-router-dom';

function Suscribe(props){

  const navigate = useNavigate()

  const handleUpgrade=(e)=>{
    console.log("Premium");
    this.setsState()
  }


    const SuscribeOptions = [
    { text: "Upgrade to Premium",  handler:()=>{} , id: 1 },
    { text: "Benefits for Members",  handler: () => {} , id: 2 },
    { text: "Cancel Suscription", handler: () => {}, id: 3 },
  ]

  const SuscribeOptionsMarkup = SuscribeOptions.map((option) => (
    <button
      className="link-list-item-url"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return (<div className="options-container">{SuscribeOptionsMarkup}</div>);
};

export default Suscribe
