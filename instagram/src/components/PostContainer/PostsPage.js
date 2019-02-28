import React, { Component } from 'react';
import PostContainer from '../PostContainer/PostContatiner';
import dummyData from '../../DummyData/dummy-data';
import SearchBar from '../SearchBar/SearchBar';

export default class PostsPage extends Component {
    constructor(){
        super();
        this.state ={
            dataProps: [],
        }
    }

    componentDidMount(){
    this.setState({dataProps:dummyData});
  }

    // componentDidMount(){
    //     this.setState({data1:this.props.data})
    // }

    render() {
        return (
        <div>
            <SearchBar />
            <PostContainer data={this.state.dataProps} />
        </div>
        )
    }
}
