import React, {Component} from 'react';
import {Link, Route, Switch} from "react-router-dom";
import AllPosts from "./Components/AllComponents/AllPosts/AllPosts";
import AllComments from "./Components/AllComponents/AllComments/AllComments";

class App extends Component {
    render() {
        return (
            <div>
                <Link to={'/posts'}>Posts</Link>
                <hr/>
                <Link to={'/comments'}>Comments</Link>
                <hr/>
                <Switch>
                    <Route path = {'/posts'} render ={() => {
                        return <AllPosts/>
                    }}/>
                    <Route path={'/comments'} render={() => {
                        return <AllComments/>
                    }}/>
                </Switch>
            </div>
        );
    }
}

export default App;