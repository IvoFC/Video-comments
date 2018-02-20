import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';
import PopUp from './'

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleHide() {
        this.setState({ show: false });
    }

    render() {
        return (
            <div className="text-center" >
                <h1>Drooble task!</h1>
                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow} >Open Pop-Up</Button>
                <Modal
                    {...this.props}
                    show={this.state.show}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal"
                >
                    <Modal.Header>
                        <Modal.Title id="contained-modal-title-lg">
                            Modal heading
            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Wrapped Text</h4>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae
                            unde commodi aspernatur enim, consectetur. Cumque deleniti
                            temporibus ipsam atque a dolores quisquam quisquam adipisci
            </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}