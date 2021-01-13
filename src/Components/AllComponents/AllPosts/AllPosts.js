import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import ServicesOfPost from "../../ServicesOfPosts/ServisesOfPosts";
import Post from "../../Post/Post";
import FullPost from "../../Post/FullPost";

class AllPosts extends Component {

    servicesOfPosts = new ServicesOfPost()

    state = {posts:[]}

    componentDidMount() {
        this.servicesOfPosts
            .getAllPosts()
            .then(posts=>this.setState({posts}))
        // this.setState({posts})
    }

    render() {
        let {posts} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {
                    posts.map(value => <Post item = {value} key = {value.id}/>)
                }
                <hr/>

                    <Route path={url + `/:id`} render={({match:{params:{id}}}) => {
                        return <FullPost id={id} key = {id}/>
                    }}/>

                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);
