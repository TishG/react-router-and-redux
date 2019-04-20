import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { deletePost } from '../actions/postActions';

class Post extends Component {

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        //to rediect back to home
        this.props.history.push('/');
    }
    render() {
        const post = this.props.post ?
        <section>
            <h3>{this.props.post.title}</h3>
            <p>{this.props.post.body}</p>
            <button 
            className="waves-effect waves-light btn-small red darken-1"
            onClick={this.handleClick}>Delete</button>
        </section> 
        :
        <section>
            Post is loading...
        </section>
        return (
            <section className="container center">
                {post}
            </section>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === parseInt(id))
    }
}

const mapDispatchToProps = (dispatch) => {
    //calling deletePost() returns object
    console.log(deletePost());
    return {
        deletePost: (id) => dispatch(deletePost(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);