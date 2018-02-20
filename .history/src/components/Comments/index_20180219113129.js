import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroug, FormGroup, FormControl } from 'react-bootstrap';

export default class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comments: [
                comment = {
                    video: 'https://www.youtube.com/watch?v=mHlaRJvNjsA',
                    comment: 'Very good song',
                    replys: [
                        'comments on comment on reply'
                    ]
                }
            ]
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="text-center" >
                {
                    this.state.comments.forEach(comment => {
                        return (<h5>{comment.comment}</h5>

                    })
                }
            </div>
        )
    }
}