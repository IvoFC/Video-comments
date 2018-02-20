import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroug, FormGroup, FormControl } from 'react-bootstrap';

export default class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comments: [
                {
                    video: 'https://www.youtube.com/embed/mHlaRJvNjsA',
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
                        if (comment.video === this.props.src) {
                            return <div key={index}>
                            
                                <h4>{comment.comment}</h4>
                                <div>
                                    {
                                        comment.replys.map((reply, index) => {
                                            return <p key={index + Date()}>{reply}</p>
                                        })
                                    }
                                </div>
                            </div>
                        }
                    })
                }
            </div>
        )
    }
}