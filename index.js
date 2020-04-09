import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import OrderForm from './components/OrderForm';
import Cart from './components/Cart';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";
import { shells } from './ingredients/shells.json'
import { base_layers } from './ingredients/base_layers.json'
import { seasonings } from './ingredients/seasonings.json'
import { mixins } from './ingredients/mixins.json'
import { condiments } from './ingredients/condiments.json'

import './style.css';

function App() {

  const [orderState, toggleOrder] = useState(false);
  const [orders, setOrders] = useState([])
  const [ingredients, setIngredients] = useState({'shells': shells})
  const [title, changeTitle] = useState("Welcome to the Taco Shop!");


  const changeOrderState = () => toggleOrder(!orderState)

  // useEffect = (()=> {
  //   setIngredients({
  //     'shells': shells,
  //     'base_layers': base_layers,
  //     'seasonings': seasonings,
  //     'mixins': mixins,
  //     'condiments':condiments,
  //   })
  // }, [ingredients])

  return (
    <Container>
      <Header as="h2">{title}</Header>
      <Grid columns={2} stackable>
        <Grid.Column width={10}>
          <OrderForm toggleOrderState={changeOrderState} ingredients={ingredients} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Cart />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
