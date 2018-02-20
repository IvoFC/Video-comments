import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {
    coms

    render() {
        return (
            <div className="text-center" >
                {/* <iframe
                    className={this.props.className}
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    width="570"
                    src={this.props.src}
                /> */}
                <video width="570" height="315" id="player1" preload="none">
                    <source type="video/youtube" src="https://www.youtube.com/watch?v=Buyr7C4EFjQ" />
                </video>
            </div>
        )
    }
}