import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

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
            this.setState({
                show: nextProps.show
            })
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
                    <Modal.Body>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                        >
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}