class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      console.log(message)

      const lowerCase = message.toLowerCase()


      if(lowerCase.includes("hello")|| lowerCase.includes("hi")){
        this.actionProvider.greet()
      }

      if(lowerCase.includes("1")|| lowerCase.includes("login") || lowerCase.includes("signup")){
        this.actionProvider.handleLoginButton()
      }

      if(lowerCase.includes("2")|| lowerCase.includes("suscribe") || lowerCase.includes("premium")){
        this.actionProvider.handleSuscribeButton()
      }

      if(lowerCase.includes("3")|| lowerCase.includes("news")){
        this.actionProvider.handleNewsButton()
      }

      if(lowerCase.includes("4")|| lowerCase.includes("project") || lowerCase.includes("post")){
        this.actionProvider.handleProjectsButton()
      }
      if(lowerCase.includes("5")|| lowerCase.includes("my") || lowerCase.includes("profile")){
        this.actionProvider.handleProfileButton()
      }
      if(lowerCase.includes("bye")|| lowerCase.includes("goodbye")){
        this.actionProvider.goodbye()
      }

      if(lowerCase.includes("gotodashboard")|| lowerCase.includes("dashboard")){
        this.actionProvider.handleMyProfile()
      }
    }
  }
  
  export default MessageParser;