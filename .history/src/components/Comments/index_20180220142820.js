import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, FormGroup, FormControl } from 'react-bootstrap';
import avatar from '../../../public/assets/images/28308220_1903466143020890_1527514310_n.png'
import like from '../../../public/assets/images/28190462_1903466153020889_2113551385_n.png';
import share from '../../../public/assets/images/28190588_1903466146354223_1465949102_n.png';
import commentPng from '../../../public/assets/images/28232822_1903466149687556_393007673_n.png';
import report from '../../../public/assets/images/28191204_1903466139687557_990238965_n.png';
import './style.css';
import { connect, store } from 'react-redux';
import { addComment, updateComment } from '../../actions/CommentsActions';

const ENTER_KEY = 13;

class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showReply: false,
            comment: '',
            reply: {
                commentId: '',
                reply: ''
            },
            comments: [
                {
                    video: '',
                    time: '',
                    comment: '',
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
                comment: this.state.comment,
                replys: []
            });

            this.setState({ comments });
            if (this.props.comments.comments.length > 0) {
                this.props.dispatch(updateComment({ comments, comments }));
            } else {
                this.props.dispatch(addComment({ comments }));
            }
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
            comments[this.state.reply.commentId].replys.unshift({
                time: `${month} ${day}, ${year} AT ${time}`,
                comment: this.state.reply.reply,
            });

            this.setState({ comments });
            this.props.dispatch(updateComment({ comments, comments }));
        }
    }


    handleChange(e) {
        console.log(this.state)
        if (e.currentTarget.id === 'commentInput') {
            this.setState({ comment: e.currentTarget.value });
        } else {
            let reply = {
                commentId: e.currentTarget.id,
                reply: e.currentTarget.value
            }
            this.setState({ reply });
        }
    }

    showAddReply(e) {
        let replyBox = document.getElementsByClassName('replyBox')[e.currentTarget.id];
        if (this.state.showReply) {
            replyBox.classList.add('hide');
            this.setState({ showReply: false });

        } else {
            replyBox.classList.remove('hide');
            this.setState({ showReply: true });
        }
    }

    componentDidMount() {
        console.log('did')
        console.log(this.props.comments);
        console.log(this.state.comments);
     
    }

    componentWillMount() {
        console.log('will')
        console.log(this.props.comments);
        console.log(this.state.comments);
       
    }

    render() {

        return (
            <div className="text-left" >
                <input
                    onKeyPress={this.addComment}
                    id='commentInput'
                    className='commentInput form-control input-lg'
                    type="text"
                    placeholder="comment..."
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
                                                <Button id={index} onClick={this.showAddReply} className="bsLikeShare" bsSize="small"><img src={commentPng} /> COMMENT</Button>
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
                                            <input
                                                onKeyPress={this.addReply}
                                                id={index}
                                                className='form-control replyInput'
                                                type="text"
                                                placeholder="Reply..."
                                                onChange={this.handleChange}
                                            />
                                        </div>
                                        {
                                            comment.replys.map((reply, index) => {
                                                return (
                                                    <div key={index} className='replys'>
                                                        <div>
                                                            <div className="personInfo">
                                                                <h4><strong>Stoyan Daskaloff</strong></h4>
                                                                <p><strong>{reply.time}</strong></p>
                                                            </div>
                                                        </div>
                                                        <p>{reply.comment}</p>
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

const decorate = connect((state) => {
    return {
        comments: state.comments
    }
});

export default decorate(Comments);