import React, { Component } from 'react';
import './Clients.css';

class Clients extends Component {
    render() {
        return (
            <div className="App-content">
                <p>
                    Hello.
                </p>
                <p>
                    My name is Artyom.
                </p>
                <p>
                    This is a simple single-page application based on ReactJS.
                </p>
                <p>
                    Implemented things:
                </p>
                <ul>
                    <li>A basic layout</li>
                    <li>Several sample pages</li>
                    <li>Simple authorization</li>
                    <li>React Routing</li>
                    <li>React Redux</li>
                </ul>
            </div>
        )
    }
}

export default Clients;