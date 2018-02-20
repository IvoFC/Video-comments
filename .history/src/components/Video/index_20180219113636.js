import React from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Modal, FormGroup, FormControl } from 'react-bootstrap';
import like from '../../../public/assets/images/28190462_1903466153020889_2113551385_n.png';
import share from '../../../public/assets/images/28190588_1903466146354223_1465949102_n.png';
import './style.css';

import Comments from '../Comments'

export default class Video extends React.Component {

    render() {
        return (
            <div className={this.props.className} >
                <iframe
                    allowFullScreen
                    frameBorder="0"
                    height="315"
                    width="570"
                    src={this.props.src}
                />
                <div className="bsGroup">
                    <ButtonGroup className="pull-left">
                        <Button className="bsLikeShare" bsSize="small"><img src={like} />  LIKE</Button>
                        <Button className="bsLikeShare" bsSize="small"><img src={share} /> SHARE</Button>
                    </ButtonGroup>
                    <ButtonGroup className="pull-right">
                        <Button className="bsEdit" bsStyle="primary" bsSize="small">SHARE</Button>
                        <Button bsStyle="danger" bsSize="small">DELETE</Button>
                    </ButtonGroup>
                </div>
                <FormControl
                    className='commentInput'
                    type="text"
                    placeholder="comment..."
                    bsSize="large"
                // onChange={this.handleChange}
                />
            </div>
        )
    }
}