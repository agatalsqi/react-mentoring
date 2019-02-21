import React, { Component } from 'react';
import logo from '../logo.svg';

import './Logo.css';

class Logo extends Component {
    render() {
        return (
            <figure className={"App-logo-figure col-lg-1" + (this.props.additionalClasses ? " " + this.props.additionalClasses : "")}>
                <img src={logo} className="App-logo" alt="logo" />
                <figcaption>A. Gatalskiy</figcaption>
            </figure>
        )
    }
}

export default Logo;
