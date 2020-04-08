import React, { Component } from 'react';
import { render } from 'react-dom';
import OrderForm from './components/OrderForm';
import { Button, Container, Header, Divider, Grid } from "semantic-ui-react";
import { shells } from './ingredients/shells.json'
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
      order: [],
      title: "Welcome to the Taco Shop!"
    };
  }

  render() {
    let { title } = this.state
    return (
      <div>
        <Header as="h2">{title}</Header>
        <OrderForm ingredients={shells} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
