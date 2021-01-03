import React, {Component} from 'react';
import {Link, withRouter} from "react-router-dom";

class Comment extends Component {
    render() {
        let {comments,match:{url}} = this.props
        return (
            <div>
                {comments.id} - {comments.name} - <Link to={`${url}/${comments.id}`}>details</Link>
            </div>
        );
    }
}

export default withRouter(Comment);