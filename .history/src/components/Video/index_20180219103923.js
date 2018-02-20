import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Modal, FormGroup, FormControl } from 'react-bootstrap';
import './style.css';

export default class Video extends React.Component {

    render() {
        return (
            <div className={this.props.className} >
                <iframe
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    width="570"
                    src={this.props.src}
                />
                <div className="bsGroup">
                    <ButtonGroup className="pull-left">
                        <Button className="bsEdit" bsStyle="primary" bsSize="small">LIKE</Button>
                        <Button bsSize="small">DELETE</Button>
                    </ButtonGroup>
                    <ButtonGroup className="pull-right">
                        <Button className="bsEdit" bsStyle="primary" bsSize="small">SHARE</Button>
                        <Button bsStyle="danger" bsSize="small">DELETE</Button>
                    </ButtonGroup>
                </div>
                <FormControl
                    className='commentInput'
                    type="text"
                    placeholder="comment..."
                    bsSize="large"
                    // onChange={this.handleChange}
                />

            </div>
        )
    }
}