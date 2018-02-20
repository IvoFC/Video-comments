import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Drooble task!</h1>
                <Button bsStyle="primary">Open Pop</Button>
            </div>
        )
    }
}

export default App;