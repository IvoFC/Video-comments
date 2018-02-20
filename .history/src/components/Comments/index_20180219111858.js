import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Comments extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: false
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        return (
            <div className="text-center" >
                <h1>Drooble task!</h1>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow} >Open Pop-Up</Button>
                <PopUp show={this.state.show} />
            </div>
        )
    }
}