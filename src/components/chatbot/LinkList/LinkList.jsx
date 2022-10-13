import React from "react";
import "./LinkList.css"



const LinkList = (props) => {

  // console.log(props);

   const linkMarkup = props.options.map((link) => (
     <li key={link.id} className="link-list-item">
       <button
       href="#"
       value={link.text}
       className="link-list-item-url"
      //  onClick={(e)=>setState(e.target.value)}
       >
         {link.text}
       </button>
     </li>
   ));

   return <ul className="link-list">{linkMarkup}</ul>;
 };



export default LinkList;