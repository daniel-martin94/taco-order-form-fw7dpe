import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import OrderForm from './components/OrderForm';
import Cart from './components/Cart';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";
import { shells } from './ingredients/shells.json'
import './style.css';

function App() {

  const [orderState, toggleOrder] = useState(false);
  const [orders, setOrders] = useState([])
  const [title, changeTitle] = useState("Welcome to the Taco Shop!");

  const changeOrderState = () => toggleOrder(!orderState)

  return (
    <Container>
      <Header as="h2">{title}</Header>
      <Grid columns={2} stackable>
        <Grid.Column width={10}>
          <OrderForm toggleOrderState={changeOrderState} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Cart />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
