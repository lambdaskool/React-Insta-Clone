import React, {Component} from 'react';
import Comment from './Comment';


class CommentSection extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments: [],
            comment: '',
        }
    }

    componentDidMount(){
        this.setState({comments: this.props.comments})
    }

    handleChanges = e => {
        console.log(e.target.value);
        //     this.setState({ comment: e.target.value })
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    addNewComment = event => {
        console.log(event);
        event.preventDefault();        
        this.setState({
            comments: [
                ...this.state.comments, 
                {
                    text: this.state.comment,
                    username: 'lazer wolf'
                }
            ]
        })
    }

    render(){
        return(
        <div>
        {this.state.comments.map((c, i) => <Comment username={c.username} key={i} text={c.text} />)}
        <form onSubmit={this.addNewComment}>
            <label>
                Comment:
                <input 
                    type="text"
                    name='comment'
                    value={this.state.comment}
                    onChange={this.handleChanges}
                    placeholder = 'add comment'
                />
            </label>
        </form>
        </div>);
    }

}



export default CommentSection;