import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div className="pagination-centered" >
                <h1>Drooble task!</h1>
                <Button bsStyle="primary" bsSize="large">Open Pop-Up</Button>
            </div>
        )
    }
}

export default App;