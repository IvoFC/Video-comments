import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';
import Video from '../Video';

export default class PopUp extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleHide = this.handleHide.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            show: false,
            src: ""
        };
    }

    handleChange(e) {
        let src = e.currentTarget.value;
        src = src.replace("watch?v=", "embed/");
        e.currentTarget.className.
        this.setState({ src });
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
                        <FormControl
                            type="text"
                            placeholder="Paste your link here..."
                            onChange={this.handleChange}
                        />
                        <Video
                            {...this.props}
                            src={this.state.src}
                        />
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}