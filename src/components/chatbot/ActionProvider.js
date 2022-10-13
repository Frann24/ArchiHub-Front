import {BASE_URL} from "../../redux/slices/constants"

class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) 
     
   {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;

   }
   greet(){
    const greetMessage = this.createChatBotMessage("Hi, welcome to Arquihub!")
    this.updateChatbotState(greetMessage)
   }

   goodbye(){
    const greetMessage = this.createChatBotMessage("May the force be with you, always")
    this.updateChatbotState(greetMessage)
   }


   handleLinkList=()=>{
    const message = this.createChatBotMessage("Fantastic, I've got the following resources for you on this:",
    {
        widget: "LinkList"
    })
    this.updateChatbotState(message)
   }

   handleLoginButton=()=>{
    const message = this.createChatBotMessage("Sure, here are your options:",
    {
        widget: "Login",
        withAvatar:false,
        delay: 500
    })
    this.updateChatbotState(message)
   }


   handleSuscribeButton=()=>{
    const message = this.createChatBotMessage("Sure, here are your options:",
    {
        widget: "Suscribe",
        withAvatar:false,
        delay: 500
    })
    this.updateChatbotState(message)
   }


   handleNewsButton=()=>{
    const message = this.createChatBotMessage(`You can see the breaking news here : ${BASE_URL}news` ,
    {
        widget: "ShowNews",
        withAvatar:false,
        delay: 500
    })
    this.updateChatbotState(message)
   }

   handleProjectsButton=()=>{
    const message = this.createChatBotMessage("Sure, here are your options:",
    {
        widget: "Project",
        withAvatar:false,
        delay: 500
    })
    this.updateChatbotState(message)
   }

   handleProfileButton=()=>{
    const message = this.createChatBotMessage("Sure, here are your options:",
    {
        widget: "MyProfile",
        withAvatar:false,
        delay: 500
    })
    this.updateChatbotState(message)
   }

   handleMyProfile=()=>{
    const token = JSON.parse(localStorage.getItem("token"))
    const id = token?token.userId:null
    if(id){
        let message = this.createChatBotMessage(`Here is the link to your profile: ${BASE_URL}user/${id}`,
        {
            widget: "GoToDashBoard",
            withAvatar:false,
            delay: 500
        })
       this.updateChatbotState(message)
    }else{
        let message = this.createChatBotMessage(`You must be logged in to access your profile, lookout for the Login button on the top, you can register with your Google account too!`,
        {
            widget: "GoToDashBoard",
            withAvatar:false,
            delay: 500
        })
       this.updateChatbotState(message)
        let secondMessage = this.createChatBotMessage(`How else can i help?`,
        {
        widget: "Options",
        withAvatar:false,
        delay: 1000
    })
       this.updateChatbotState(secondMessage)

    }
   }

   updateChatbotState(message){
    this.setState(prevState=>({
        ...prevState, messages:[...prevState.messages, message]
    }))
   }
}
 
 export default ActionProvider;
 