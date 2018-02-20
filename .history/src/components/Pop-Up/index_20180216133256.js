import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

export default class PopUp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleHide = this.handleHide.bind(this);

        this.state = {
            show: false
        };
    }

    handleHide() {
        this.setState({ show: false });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.show) {
            let data = {
                class: nextProps.class,
                subject: nextProps.subject,
                days: nextProps.days
            }

            this.getPrices(data);
            this.getSchedule(data);
        }
    }

    render() {
        return (
            <div className="text-center" >
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