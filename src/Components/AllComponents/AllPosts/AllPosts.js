import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import ServicesOfPost from "../../ServicesOfPosts/ServisesOfPosts";
import Post from "../../Post/Post";
import FullPost from "../../Post/FullPost";

class AllPosts extends Component {

    servicesOfPosts = new ServicesOfPost()

    state = {posts:[]}

    async componentDidMount() {
        let posts = await this.servicesOfPosts.getAllPosts()
        this.setState({posts})
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
                <Switch>
                    <Route path={url + `/:id`} render={(props) => {
                        let {match:{params:{id}}} = props
                        return <FullPost id={id} key = {id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllPosts);