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
                    <ButtonGroup>
                        <Button className="bsEdit" bsStyle="primary" bsSize="small">EDIT</Button>
                        <Button bsStyle="danger" bsSize="small">DELETE</Button>
                    </ButtonGroup>
                    <ButtonGroup className="">
                        <Button className="bsEdit" bsStyle="primary" bsSize="small">EDIT</Button>
                        <Button bsStyle="danger" bsSize="small">DELETE</Button>
                    </ButtonGroup>
                </div>

            </div>
        )
    }
}