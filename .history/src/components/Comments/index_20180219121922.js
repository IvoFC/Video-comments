import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroug, FormGroup, FormControl } from 'react-bootstrap';

export default class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comments: [
                {
                    video: 'https://www.youtube.com/watch?v=mHlaRJvNjsA',
                    comment: 'Very good song',
                    replys: [
                        'comments on comment on reply', 'comment in reply ala bala'
                    ]
                }
            ]
        };
    }

    render() {
        return (
            <div className="text-center" >
                {
                    this.state.comments.map((comment, index) => {

                        return <div key={index}>
                            <h5>{comment.comment}</h5>
                            <div>
                                {
                                    comment.replys.map((reply, index) => {
                                        return <p key={index + Date()}>{reply}</p>
                                    })
                                }
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}