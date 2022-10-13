import { createChatBotMessage } from "react-chatbot-kit";
import { NavLink } from "react-router-dom";
import LinkList from "./LinkList/LinkList";
import Options from "./Options/Options";
import Login from "./LinkList/botComponents/Login"
import MyProfile from "./LinkList/botComponents/MyProfile"
// import News from "./LinkList/botComponents/News"
import Project from "./LinkList/botComponents/Project"
import Suscribe from "./LinkList/botComponents/Suscribe"

const botName= "Archie"


const config = {
  botName : botName,
  lang: "en",
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
    
  initialMessages: [
    createChatBotMessage(
      `Hi I'm ${botName}, welcome to Arquihub!.`
    ),
    createChatBotMessage(
      "How can i help you?",
      {
        withAvatar: false,
        delay: 500,
        widget: "Options",
      }
    ),
  ],
  state:{
    selectedOption: "",
  },
  customComponents:{},
    widgets: [

        {
            widgetName: "Options",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "1. Login/SignUp ",
                        handler:()=>{},
                         id: 1
                    },
                    {
                        text: "2. Suscribe/Premium Account ",
                        handler:()=>{},
                         id: 2
                    },
                    {
                        text: "3. Newsletter ",
                        handler:()=>{},
                         id: 3
                    },
                    {
                        text: "4. Projects/Posts ",
                        handler:()=>{},
                         id: 4
                    },
                    {
                        text: "5. MyProfile ",
                        handler:(props)=> props.actionProvider.handleMyProfile ,
                        id: 5
                    },  
           

                ]
            }
        },
        {
            widgetName:"Login",
            widgetFunc:(props)=> <Login {...props}/>,
            mapStateToProps: ["selectedOption"]
        },
        {
            widgetName:"MyProfile",
            widgetFunc:(props)=> <MyProfile {...props}/>,
            mapStateToProps: ["selectedOption"]
        },
        // {
        //     widgetName:"News",
        //     widgetFunc:(props)=> <News {...props}/>,
        //     mapStateToProps: ["selectedOption"]
        // },
        {
            widgetName:"Project",
            widgetFunc:(props)=> <Project {...props}/>,
            mapStateToProps: ["selectedOption"]
        },
        {
            widgetName:"Suscribe",
            widgetFunc:(props)=> <Suscribe {...props}/>,
            mapStateToProps: ["selectedOption"]
        }
    ]
}
console.log(config);

export default config

