import React, { Component } from 'react';

import './Footer.css';
import '../App.css';

import Copyright from './Copyright';
import Logo from './Logo';
import Navigation from './Navigation'

class Footer extends Component {
    render() {
        return (
            <footer className="App-footer">
                <div className="Footer-wrapper">
                    <Navigation />
                    <Logo additionalClasses="ml-auto" />
                </div>
                <Copyright />
            </footer>
        )
    }
}

export default Footer;