import React, {Component} from 'react';
import Comment from './Comment'

class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
        }
    }

    componentDidMount(){
        this.setState({comments: this.props.comments})
    }

    render(){
        return <div>{this.state.comments.map((c, i) =>
            <Comment username={c.username} key={i} text={c.text} />
       )}</div>;
    }
}

// const CommentSection = props => {
//     console.log(props.comments);
//     return <div>{props.comments.map((c, i) =>
//          <Comment username={c.username} key={i} text={c.text} />
//     )}</div>;


    
// }

export default CommentSection;