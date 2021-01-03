import React, {Component} from 'react';
import ServicesOfPost from "../ServicesOfPosts/ServisesOfPosts";

class FullPost extends Component {
    state = {post:null}

    servicesOfPosts = new ServicesOfPost()

    async componentDidMount() {
        let {id} = this.props
        let post = await this.servicesOfPosts.getPostId(id)
        this.setState({post})
    }

    render() {
        let {post} = this.state;
        return (
            <div>
                {post && <div>{post.id} - {post.userId} - {post.title} - {post.body}</div>}
            </div>
        );
    }
}

export default FullPost;