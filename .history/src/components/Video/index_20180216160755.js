import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            src: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src) {
            this.setState({
                src: nextProps.src
            })
        }
    }

    render() {
        return (
            <div className="text-center" >
                <iframe
                     allowFullScreen
                     frameBorder="0"
                     height="315"
                     width="570"
                    src={this.state}
                />
            </div>
        )
    }
}