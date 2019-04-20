import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
class Home extends Component {
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length > 0 ? 
        posts.map(post => 
        <section className="card pink" key={post.id}>
            <section className="card-content">
                <Link to={'/' + post.id}>
                <span className="card-title white-text"><strong> {post.title} </strong></span>
                </Link>
                <p className="white-text"> {post.body} </p>
            </section>
        </section>
        )
        :
        <h5>There are no posts yet</h5>

        return (
            <section className="Home container center">
                <h1 className="center deep-purple-text text-darken-3">Home</h1>
                { postList }
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);