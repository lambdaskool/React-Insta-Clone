import React, { Component } from 'react';
import './App.css';
import './DummyData/dummy-data';
import dummyData from './DummyData/dummy-data';
// import PostContainer from './components/PostContainer/PostContatiner';
import SearchBar from './components/SearchBar/SearchBar';
import PostsPage from './components/PostContainer/PostsPage';
import LoginPage from './components/Login/Login';


class App extends Component {
  constructor(){
    super();
    this.state={
      dataProps : [],
      bully: false,
    }
  }

  componentDidMount(){
  this.setState({dataProps:dummyData}, ()=>{/*console.log(this.state.data)*/})
    // setTimeout(()=> {alert('Hello') this.setState({bully:true}, console.log(this.state.bully)) }, 3000)
  }

  // always conditional, causes rerender
  // componentDidUpdate(){
  //   if(this.state.bully){
  //     console.log('Would Rerender')
  //   }
  // }

  // componentWillUnmount(){
  //   clearTimeout();
  // }

  render() {
    // console.log(this.state.data);
    // console.log(this.state.bully);
    return (
      <div className="App">
        <SearchBar />
        {/* <ToShow /> */}
        <LoginPage />
        <PostsPage data={this.state.dataProps} />
      </div>
    )
  }

  // const ToShow = withConditionalRender(LoginPage)(PostsPage);

  
  

}


export default App;
