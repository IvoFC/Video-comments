import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {

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
                <video width="640" height="360" id="player1" preload="none">
                    <source type="video/youtube" src="http://www.youtube.com/watch?v=nOEw9iiopwI" />
                </video>
            </div>
        )
    }
}