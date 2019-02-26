import React, { Component } from 'react';
import PostContainer from '../PostContainer/PostContatiner';

export default class PostsPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            data1: [],
        }
    }

    // componentDidMount(){
    //     this.setState({data1:this.props.data})
    // }

    render() {
        return (
        <div>
            <PostContainer data={this.props.data} />

        </div>
        )
    }
}
