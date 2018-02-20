import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

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
                <div>
                    <Button className="bs">EDIT</Button>
                    <Button bsStyle="danger">DELETE</Button>
                </div>

            </div>
        )
    }
}