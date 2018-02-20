import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import PopUp from '../Pop-Up';

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            shows: false
        };
    }

    handleShow() {
        this.setState({ shows: true });
    }

    handleHide() {
        this.setState({ shows: false });
    }

    render() {
        return (
            <div className="text-center" >
                <h1>Drooble task!</h1>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow} >Open Pop-Up</Button>
                <PopUp show={this.state.shows} onHide={this.handleHides} onClick={this.handleHide} />
            </div>
        )
    }
}