import React, { Component } from 'react';

import './Header.css';
import '../App.css';

import Logo from './Logo';
import Navigation from './Navigation'

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <Logo /> 
                <Navigation additionalClasses="ml-auto" />
            </header>
        )
    }
}

export default Header;