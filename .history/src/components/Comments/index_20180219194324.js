import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap';
import avatar from '../../../public/assets/images/28308220_1903466143020890_1527514310_n.png'
import like from '../../../public/assets/images/28190462_1903466153020889_2113551385_n.png';
import share from '../../../public/assets/images/28190588_1903466146354223_1465949102_n.png';
import commentPng from '../../../public/assets/images/28232822_1903466149687556_393007673_n.png';
import report from '../../../public/assets/images/28191204_1903466139687557_990238965_n.png';
import './style.css';
import { connect } from 'react-redux';
import { addComment } from '../../actions/CommentsActions';

const ENTER_KEY = 13;

class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showReply: false,
            comment: '',
            reply: '',
            comments: [
                {
                    video: '',
                    time: '',
                    comment: "",
                    replys: [
                        {
                            time: '',
                            comment: ''
                        }
                    ]
                }
            ]
        };
        this.showAddReply = this.showAddReply.bind(this);
        this.addComment = this.addComment.bind(this);
        this.addReply = this.addReply.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if (e.currentTarget.className === 'commentInput') {
            this.setState({ comment: e.currentTarget.value });
        } else {
            this.setState({ reply: e.currentTarget.value });
        }
    }

    addComment(target) {
        const date = new Date(),
            locale = "en-us",
            month = date.toLocaleString(locale, { month: "long" }),
            day = date.getDay(),
            year = date.getFullYear(),
            time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        if (target.charCode === ENTER_KEY) {
            let comments = this.state.comments;
            comments.unshift({
                video: this.props.src,
                time: `${month} ${day}, ${year} AT ${time}`,
                comment: this.state.reply,
            });

            this.setState({ comments });
        }
    }

    addReply(target) {
        const date = new Date(),
            locale = "en-us",
            month = date.toLocaleString(locale, { month: "long" }),
            day = date.getDay(),
            year = date.getFullYear(),
            time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

        if (target.charCode === ENTER_KEY) {
            let comments = this.state.comments;
            comments[target.id].replys.unshift({
                time: `${month} ${day}, ${year} AT ${time}`,
                comment: this.state.comment,
                replys: []
            });

            this.setState({ comments });
        }
    }

    showAddReply(e) {
        let replyBox = document.getElementsByClassName('replyBox')[0];
        if (this.state.showReply) {
            replyBox.classList.add('hide');
            this.setState({ showReply: false });

        } else {
            replyBox.classList.remove('hide');
            this.setState({ showReply: true });
        }
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
                <FormControl
                    onKeyPress={this.addComment}
                    className='commentInput'
                    type="text"
                    placeholder="comment..."
                    bsSize="large"
                    onChange={this.handleChange}
                />
                <hr />
                {
                    this.state.comments.map((comment, index) => {
                        if (comment.video === this.props.src) {
                            return (
                                <div key={index}>
                                    <div>
                                        <img className="avatar" src={avatar} />
                                        <div className="personInfo">
                                            <h4><strong>Stoyan Daskaloff</strong></h4>
                                            <p><strong>{comment.time}</strong></p>
                                        </div>
                                    </div>
                                    <div className="commentBox">
                                        <h5>{comment.comment}</h5>
                                        <div className="bsGroup">
                                            <ButtonGroup className="pull-left">
                                                <Button className="bsLikeShare" bsSize="small"><img src={like} />  LIKE</Button>
                                                <Button className="bsLikeShare" bsSize="small"><img src={share} /> SHARE</Button>
                                                <Button onClick={this.showAddReply} className="bsLikeShare" bsSize="small"><img src={commentPng} /> COMMENT</Button>
                                            </ButtonGroup>
                                            <ButtonGroup className="pull-right">
                                                <Button className="bsReport" bsSize="small"><img src={report} /> REPORT</Button>
                                            </ButtonGroup>
                                        </div>
                                        <hr className="commentLine" />
                                        <div className='replyBox hide'>
                                            <span className="replyC">COMMENT</span>
                                            <span>PHOTO</span>
                                            <span>FEEDBACK</span>
                                            <FormControl
                                                id={index}
                                                onKeyPress={this.addReply}
                                                className='replyInput'
                                                type="text"
                                                placeholder="Reply..."
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {
                                            comment.replys.map((reply, index) => {
                                                return (
                                                    <div className='replys'>
                                                        <div>
                                                            <div className="personInfo">
                                                                <h4><strong>Stoyan Daskaloff</strong></h4>
                                                                <p><strong>{reply.time}</strong></p>
                                                            </div>
                                                        </div>
                                                        <p key={index + Date()}>{reply.comment}</p>
                                                    </div>
                                                )
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

const decorate = connect();

export defaultComments);