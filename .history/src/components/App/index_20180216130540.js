import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal } from 'react-bootstrap';

class App extends React.Component {
    
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