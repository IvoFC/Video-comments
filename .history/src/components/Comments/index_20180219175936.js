import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap';
import avatar from '../../../public/assets/images/28308220_1903466143020890_1527514310_n.png'
import like from '../../../public/assets/images/28190462_1903466153020889_2113551385_n.png';
import share from '../../../public/assets/images/28190588_1903466146354223_1465949102_n.png';
import commentPng from '../../../public/assets/images/28232822_1903466149687556_393007673_n.png';
import report from '../../../public/assets/images/28191204_1903466139687557_990238965_n.png';
import './style.css';

export default class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            comments: [
                {
                    video: 'https://www.youtube.com/embed/mHlaRJvNjsA',
                    time: '',
                    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularis",
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
                                        <img className="avatar" src={avatar} />
                                        <div className="personInfo">
                                            <h4><strong>Stoyan Daskaloff</strong></h4>
                                            <p><strong>{`${month} ${day}, ${year} AT ${time}`}</strong></p>
                                        </div>
                                    </div>
                                    <div className="commentBox">
                                        <h5>{comment.comment}</h5>
                                        {/* <div className="bsGroup"> */}
                                        <ButtonGroup className="pull-left">
                                            <Button className="bsLikeShare" bsSize="small"><img src={like} />  LIKE</Button>
                                            <Button className="bsLikeShare" bsSize="small"><img src={share} /> SHARE</Button>
                                            <Button className="bsLikeShare" bsSize="small"><img src={commentPng} /> COMMENT</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="pull-right">
                                            <Button className="bsReport" bsSize="small"><img src={report} /> REPORT</Button>
                                        </ButtonGroup>
                                        {/* </div> */}
                                        <hr className="commentLine" />
                                        <div className='replyBox'>
                                            <span className="replyC">COMMENT</span>
                                            <span>PHOTO</span>
                                            <span>FEEDBACK</span>
                                            <FormControl
                                                className='replyInput'
                                                type="text"
                                                placeholder="Reply"
                                            // onChange={this.handleChange}
                                            />
                                        </div>
                                        <div>
                                            {
                                                comment.replys.map((reply, index) => {
                                                    return 
                                                    <p key={index + Date()}>{reply.comment}</p>
                                                })
                                            }
                                        </div>
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