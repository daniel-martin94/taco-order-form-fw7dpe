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

  const [order, setOrder] = useState([])

  const [ingredients, setIngredients] = useState()
  const [ingredientCount, setIngredientCount] = useState(0)
  const [currentIngredient, setCurrentIngredient] = useState()

  const [title, changeTitle] = useState("Welcome to the Taco Shop!");

  const changeOrderState = () => toggleOrder(!startOrder)

  const [multipleSelection, setMultipleSelection] = useState([])

  function addSingleItem(value) {
    //This removes the last item AND return the original array. This is only for radio menu items. 
    if (order.length > ingredientCount) {
      setOrder(order.length = order.length - 1)
    }
    setOrder(currentOrder => [...order, value])
  }

  function addMultipleItem(item) {
    console.log(multipleSelection)
    console.log(item)
    let tempID = item.id
    //Deleted an item if it exisits in the multiple selection
    if (multipleSelection.some(item => item.id === tempID)) {
      setMultipleSelection(multipleSelection.filter(function (value, index) {
        if (value.id != item.id) {
          return value
        }
      }))
    } else {

      //Add the item
      setMultipleSelection(currentSelections => [...currentSelections, item])
    }
    console.log(multipleSelection)
    //This removes the last item AND return the original array. This is only for radio menu items. 
    if (order.length > ingredientCount) {
      setOrder(order.length = order.length - 1)
    }
    setOrder(currentItems => [...order, multipleSelection])
  }

  const incrementIngredient = () => {
    setCurrentIngredient(ingredients[0])
    setIngredients(ingredients.filter(function (element, index) {
      if (index !== 0) {
        return element
      }
    }))
    setIngredientCount(ingredientCount + 1);


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
  console.log(order)
  return (
    <Container>
      <Header as="h2">{title}</Header>
      <Grid columns={2} stackable>
        <Grid.Column width={10}>
          {startOrder == false && order.length == 0 &&
            <WelcomeForm toggleOrderState={changeOrderState} />
          }
          {startOrder == true &&
            <OrderForm currentIngredient={currentIngredient} changeCurrentIngredient={incrementIngredient} addMultipleItem={addMultipleItem} addSingleItem={addSingleItem} />
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
