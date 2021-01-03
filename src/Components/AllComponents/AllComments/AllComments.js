import React, {Component} from 'react';
import {Route, Switch, withRouter} from "react-router-dom";
import ServicesOfComments from "../../ServicesOfComments/ServicesOfComments";
import Comment from "../../Comments/Comment";
import FullComment from "../../Comments/FullComment";

class Comments extends Component {

    servicesOfComments = new ServicesOfComments()

    state = {comments:[]}

    async componentDidMount() {
        let comments = await this.servicesOfComments.getAllComments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {
                    comments.map(value => <Comment comments = {value} key = {value.id}/>)
                }
                <hr/>
                <Switch>
                <Route path={url + `/:id`} render={(props) => {
                    let {match:{params:{id}}} = props
                    return <FullComment id = {id} key = {id}/>
                }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(Comments);