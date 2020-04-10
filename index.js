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

  const changeCurrentIngredient = (i) => {
        setIngredients(i.filter(function(element, index){
            if (index !== 0) {
              return element
            }
        }))
  };
  //const onChangeItemName = (itemId) => {
//     setNotesDummyData(notesDummyData.filter(({ id }) => id !== itemId));
// };

  //Sets the initial ingredients
  // useEffect(() => {
  //   setIngredients([
  //     shells,
  //     base_layers,
  //     seasonings,
  //     mixins,
  //     condiments,
  //   ])
  // }, [])

  //Sets the change the ingredient list
  // useEffect(() => {
  //   setIngredients(ingredients.filter(function(element, index){
  //     if (index !== 0) {
  //       return element
  //     }
  //   }))
  // }, [])
  // setIngredients(ingredients.filter(function(element, index){
  //     if (index !== 0) {
  //       return element
  //     }
  // }))
  console.log(ingredients)
  //Sets the current ingredient to the order form
  // useEffect(() => {
  //   setCurrentIngredient(ingredients[ingredientCounter])
  // }, [])
  // console.log(currentIngredient)
  // console.log(ingredients)
  return (
    <Container>
      <Header as="h2">{title}</Header>
      <Grid columns={2} stackable>
        <Grid.Column width={10}>
        { startOrder == false && orders.length == 0 &&
          <WelcomeForm toggleOrderState={changeOrderState} />
        }
        { startOrder == true && 
          <OrderForm currentIngredient={currentIngredient} />
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
