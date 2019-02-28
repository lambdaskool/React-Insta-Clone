import React, { Component } from 'react'



const authenticate = PostPage => Login =>
  class extends Component {
    constructor(props){
      super(props);
      this.state = {
        login: false

      }
    }
    


    componentDidMount(){
      if(localStorage.getItem('username')){
        this.setState({login: true})
      } else {
        this.setState({login: false})
      }
    }

    render(){
     
        if(this.state.login){
          return <PostPage />
        } else {
           return <Login />
        }

        
      
    }
  }

// const authenticate = PostPage => Login  => props => {
//   if (localStorage.getItem('user')){
//     return <PostPage />
//   } else {
//     return <Login />
//   }
// }


export default authenticate;

