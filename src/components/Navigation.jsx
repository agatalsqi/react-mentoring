import React, { Component } from 'react';

import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className={"App-nav col-lg-5" + (this.props.additionalClasses ? " " + this.props.additionalClasses : "")}>
                <ul>
                    <li className="col-lg-4"><a href="/">Home</a></li>
                    <li className="col-lg-4"><a href="/clients">Client List</a></li>
                    <li className="col-lg-4"><a href="/about">About</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;