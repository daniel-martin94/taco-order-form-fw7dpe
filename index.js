import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import OrderForm from './components/OrderForm';
import { Button, Container, Header, Divider, Grid } from "semantic-ui-react";
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      base_layer: null,
      mixins: null,
      condiments: null,
      seasonings: null,
      order: []
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <OrderForm />
     
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
