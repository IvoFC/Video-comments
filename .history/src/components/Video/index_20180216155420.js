import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {
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
                <iframe 
                    allowFullScreen
                    frameBorder='0'
                    src={}
            </div>
        )
    }
}