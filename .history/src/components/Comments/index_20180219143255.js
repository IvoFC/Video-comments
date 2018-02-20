import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroug, FormGroup, FormControl } from 'react-bootstrap';
import avatar from '../../../public/assets/images/28308220_1903466143020890_1527514310_n.png'
import './style.css';
export default class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comments: [
                {
                    video: 'https://www.youtube.com/embed/mHlaRJvNjsA',
                    time: '',
                    comment: 'Very good song',
                    replys: [
                        {
                            time: '',
                            comment: 'dfagafsfsaf dsafsd fsagfsa'
                        }
                    ]
                }
            ]
        };
    }

    render() {
        const date = new Date(),
            locale = "en-us",
            month = date.toLocaleString(locale, { month: "long" }),
            day = date.getDay(),
            year = date.getFullYear(),
            time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        return (
            <div className="text-left" >
                {
                    this.state.comments.map((comment, index) => {
                        if (comment.video === this.props.src) {
                            return (
                                <div key={index}>
                                    <div>
                                        <img className='avatar' src={avatar} />
                                        <div>

                                        </div>
                                    </div>
                                    <h4>{comment.comment}</h4>
                                    <div>
                                        {
                                            comment.replys.map((reply, index) => {
                                                return <p key={index + Date()}>{reply.comment}</p>
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
    }
}