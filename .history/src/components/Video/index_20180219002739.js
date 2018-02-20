import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, FormGroup, FormControl } from 'react-bootstrap';

export default class Video extends React.Component {

    render() {
        return (
            <div className="text-center" >
                <iframe
                    className={this.props.className}
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    width="570"
                    src={this.props.src + 'http://www.youtube.com/embed/okqEVeNqBhc?html5=1'}
                />
                {/* <video
                    className="player__video viewer"
                    ref="video"
                    autoPlay
                    src="https://www.youtube.com/watch?v=Buyr7C4EFjQ"
                /> */}
            </div>
        )
    }
}