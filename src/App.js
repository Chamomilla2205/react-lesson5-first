import React, {Component} from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import AllPosts from "./Components/AllComponents/AllPosts/AllPosts";
import AllComments from "./Components/AllComponents/AllComments/AllComments";
import './App.css'

class App extends Component {
    render() {
        return (
            <div>
                <NavLink to={'/posts'}>Posts</NavLink>
                <hr/>
                <NavLink to={'/comments'}>Comments</NavLink>
                <hr/>

                <Switch>
                    <Route path = {'/posts'} component={AllPosts}/>
                    <Route path={'/comments'} component={AllComments}/>
                </Switch>
            </div>
        );
    }
}

export default App;
