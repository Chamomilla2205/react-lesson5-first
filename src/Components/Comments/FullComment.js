import React, {Component} from 'react';
import ServicesOfComments from "../ServicesOfComments/ServicesOfComments";

class FullComment extends Component {
    state = {comment:null}

    serviceOfComments = new ServicesOfComments()

    async componentDidMount() {
        let {id} = this.props
        let comment = await this.serviceOfComments.getIdComponent(id)
        this.setState({comment})
    }

    render() {
        let {comment} = this.state
        return (
            <div>
                {comment && <div>{comment.id} - {comment.name} - {comment.email} - {comment.body}</div>}
            </div>
        );
    }
}

export default FullComment;