import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import WelcomeForm from './components/WelcomeForm';
import OrderForm from './components/OrderForm';
import Cart from './components/Cart';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

//Ingredients
import { shells } from './ingredients/shells.json'
import { base_layers } from './ingredients/base_layers.json'
import { seasonings } from './ingredients/seasonings.json'
import { mixins } from './ingredients/mixins.json'
import { condiments } from './ingredients/condiments.json'

//Questions
import { questions } from './questions'

import './style.css';

function App() {
  const [startOrder, toggleOrder] = useState(false);
  const [endOrder, finalizeOrder] = useState(false);

  const [orders, setOrder] = useState([])

  const [ingredients, setIngredients] = useState()
  const [currentIngredient, setCurrentIngredient] = useState()
  const [question, setQuestion] = useState()

  const [title, changeTitle] = useState("Welcome to the Taco Shop!");

  const changeOrderState = () => toggleOrder(!startOrder)

  const changeOrder = (ingredientAdded) => {
    console.log(ingredientAdded)
  }

  //Need a reducer for adding to order based on radio type

  const incrementIngredient = () => {
    setCurrentIngredient(ingredients[0])
    setIngredients(ingredients.filter(function (element, index) {
      if (index !== 0) {
        return element
      }
    }))
    
  };

  //Sets the initial ingredients
  useEffect(() => {
    setIngredients([
      {
        'type': 'base_layers',
        'data': base_layers
      },
      {
        'type': 'seasonings',
        'data': seasonings
      },
            {
        'type': 'mixins',
        'data': mixins
      },
      {
        'type': 'condiments',
        'data': condiments
      },
    ]),
    setCurrentIngredient({
        'type': 'shells',
        'data': shells
      })
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
            <OrderForm currentIngredient={currentIngredient} changeCurrentIngredient={incrementIngredient} addToOrder={changeOrder}/>
          }
        </Grid.Column>
        <Grid.Column width={6}>
          <Cart />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
