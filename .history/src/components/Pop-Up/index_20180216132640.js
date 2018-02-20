import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

export default class PopUp extends React.Component {

    render() {
        return (
            <div className="text-center" >
                <Modal
                    {...this.props}
                    show={this.props.show}
                    onHide={this.props.handleHide}
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