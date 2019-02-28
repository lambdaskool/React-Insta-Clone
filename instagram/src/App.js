import React, { Component } from 'react';
import './App.css';
import './DummyData/dummy-data';
import Login from './components/Login/Login';
import PostsPage from './components/PostContainer/PostsPage';
import authenticate from './components/Authenticate/Authenticate'


class App extends Component {
  constructor(){
    super();
    this.state={
      dataProps : [],
    }
  }

  // componentDidMount(){
  //   this.setState({dataProps:dummyData});
  // }

  

  render() {
    return(
      <WithAuthenticate />
    )

     
      // <div className="App">
      //   <SearchBar />
      //   <LoginPage />
      //   <PostsPage data={this.state.dataProps} />
      // </div>
    
  }
}

const WithAuthenticate = authenticate(PostsPage)(Login);



export default App;
