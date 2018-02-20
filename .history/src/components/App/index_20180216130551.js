import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
    
        this.state = {
          show: false
        };
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      handleHide() {
        this.setState({ show: false });
      }
    render() {
        return (
            <div className="text-center" >
                <h1>Drooble task!</h1>
                <Button bsStyle="primary" bsSize="large">Open Pop-Up</Button>

            </div>
        )
    }
}

export default App;