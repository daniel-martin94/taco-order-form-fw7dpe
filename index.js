import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import WelcomeForm from './components/WelcomeForm';
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
  const [startOrder, toggleOrder] = useState(false);
  const [endOrder, finalizeOrder] = useState(false);

  const [orders, setOrders] = useState([])
  const [ingredients, setIngredients] = useState()

  const [currentIngredient, setCurrentIngredient] = useState()
  const [ingredientCounter, setCounter] = useState(0)

  const [title, changeTitle] = useState("Welcome to the Taco Shop!");

  const changeOrderState = () => toggleOrder(!startOrder)

  const incrementIngredient = () => {
    let temp = ingredients.filter(function (element, index) {
        if (index == 0) {
        return element
      }
    })
    console.log("Hey")
    console.log(temp)
    setCurrentIngredient(temp)
    console.log(currentIngredient)
    // setIngredients(ingredients.filter(function (element, index) {
    //   if (index !== 0) {
    //     return element
    //   }
    // }))
    
  };
  const changeCurrentIngredient = () => {
    console.log(ingredients.useState)
    console.log(currentIngredient)
    setCurrentIngredient({"Pork": true})
    // setCurrentIngredient(ingredients[0])
    // setCurrentIngredient(ingredients.filter(function (element, index) {
    //   if (index === 0) {
    //     console.log(element)
    //     return element
    //   }
    // }))
  };

  //Sets the initial ingredients
  useEffect(() => {
    setIngredients([
      shells,
      base_layers,
      seasonings,
      mixins,
      condiments,
    ])
  }, [])
  return (
    <Container>
      <Header as="h2">{title}</Header>
      <Grid columns={2} stackable>
        <Grid.Column width={10}>
          {startOrder == false && orders.length == 0 &&
            <WelcomeForm toggleOrderState={changeOrderState} />
          }
          {startOrder == true &&
            <OrderForm currentIngredient={currentIngredient} changeCurrentIngredient={incrementIngredient} />
          }
        </Grid.Column>
        <Grid.Column width={6}>
          <Cart />
        </Grid.Column>
        <Button
          content="Set current ingredient"
          size="medium"
          icon="arrow circle right"
          onClick={incrementIngredient}
          labelPosition="right"
        />
      </Grid>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
