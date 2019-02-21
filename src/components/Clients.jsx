import { $, jQuery } from 'jquery';
import React, { Component } from 'react';

import './Clients.css';

class Clients extends Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          clients: [],
        };
      }

    render() {
        const { error, isLoaded, clients } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
          } else if (!isLoaded) {
            return <div>Loading...</div>;
          } else {
                return (
                    <div className="App-content">
                        <ul className="Client-list">
                        {clients.map(item => (
                            <li key={item.name}>
                                {item.name.first.charAt(0).toUpperCase() + item.name.first.slice(1)} {item.name.last.charAt(0).toUpperCase() + item.name.last.slice(1)} {item.email}
                            </li>
                        ))}
                        </ul>
                    </div>
                )
          }
    }

    componentDidMount(props) {
        fetch("https://randomuser.me/api/?nat=gb&results=" + props.clientsAmount + "&inc=name,picture,email")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                clients: result.results
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {

              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
}

export default Clients;