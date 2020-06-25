import React, { Component, useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import GenericForm from './components/GenericForm';
import OrderForm from './components/OrderForm';
import TacoNumberForm from './components/TacoNumberForm'
import ShellForm from './components/ShellForm';
import Cart from './components/Cart';
import { Button, Container, Header, Divider, Grid, Segment, Transition } from "semantic-ui-react";

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

  const [order, setOrder] = useState([])

  const [ingredients, setIngredients] = useState([])
  const [ingredientCount, setIngredientCount] = useState(0)
  const [currentIngredient, setCurrentIngredient] = useState()

  const [title, changeTitle] = useState("Welcome to dpmartin's taco shop!");

  const changeOrderState = () => toggleOrder(!startOrder)

  const [multipleSelection, setMultipleSelection] = useState([])

  const [tacoNumber, setTacoNumber] = useState(1)
  const [price, setPrice] = useState(0)

  const incrementTacoNumber = () => {
    setTacoNumber(tacoNumber + 1)
  }
  const decrementTacoNumber = () => {
    setTacoNumber(tacoNumber - 1)
  }

  function addSingleItem(value, index) {
    let tempOrder = [...order]
    if (tempOrder[index] != undefined) {
      tempOrder.splice(index, 1, value)
    } else {
      tempOrder[index] = value
    }
    setOrder(tempOrder)
  }

  function addMultipleItem(item, index) {

    if (order[index] === undefined || order[index] == []) {
      order[index] = [item]
    } else {
      let tempID = item.id
      let tempOptions = [...order]
      console.log("Before")
      console.log(tempOptions[index])
    
      //Deleted an item if it exists in the multiple selection
      if (tempOptions[index].some(item => item.id === tempID)) {
        console.log("sadadadsd")
        console.log(item)
        return tempOptions[index].filter(function (value, index) {
          if (value.id != item.id) {
            return value
          }
        })
        // console.log("After")
        // console.log(tempOptions[index])
      } else {
        //Add the item
        tempOptions[index].push(item)
      }
      setOrder(tempOptions)
    }
  }

  // const incrementIngredient = () => {
  //   setCurrentIngredient(ingredients[0])
  //   setIngredients(ingredients.filter(function (element, index) {
  //     if (index !== 0) {
  //       return element
  //     }
  //   }))
  //   setMultipleSelection([])
  //   setIngredientCount(ingredientCount + 1);


  // };
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


  useEffect(() => {
    if (multipleSelection.length > 0) {
      let temp = [...order]
      temp[ingredientCount] = multipleSelection
      setOrder(temp)
    }

    //Checks that there are values
    if (multipleSelection.length == 0 && order.length > 0) {
      setOrder(order.filter(function (value, index) {
        if (index != ingredientCount) {
          return value
        }
      }))
    }
  }, [multipleSelection])

  useEffect(() => {
    if (order.length > 0) {
      let tempPrice = 0
      order.map(function (element, index) {
        if (element.price) {
          tempPrice = tempPrice + element.price;
        }
        else if (Array.isArray(element)) {
          for (let i = 0; i < element.length; i++) {
            if (element[i].price) {
              tempPrice = tempPrice + element[i].price;
            }
          }
        }
      })
      setPrice(tempPrice * tacoNumber)
    }
  }, [order])
  console.log(order)
  return (
    <Container>
    <br/>
    <Header as="h2">{title}</Header>
    
      <Grid columns={2} stackable>
        <Grid.Column width={10}>
          {/*{startOrder == false && order.length == 0 &&
              <GenericForm message={'We specialize in building your dream taco using only the freshest and healthiest ingredients! '}
                buttonContent={"Start building"}
                toggleOrderState={changeOrderState} />
          }
          {startOrder == true && ingredients.length == 0 &&
            <TacoNumberForm
              numberOfTacos={tacoNumber}
              incrementTacoNumber={incrementTacoNumber}
              decrementTacoNumber={decrementTacoNumber}
              toggleOrderState={changeOrderState} />
          }
          {startOrder == true && ingredients.length > 0 &&
            <OrderForm currentIngredient={currentIngredient} changeCurrentIngredient={incrementIngredient} addMultipleItem={addMultipleItem} addSingleItem={addSingleItem} />
          }
          {/*{startOrder == false && ingredients.length == 0 &&
            <GenericForm message={'Thank you for your order!'} />
          }*/}

{/*
        <ShellForm key={0} ingredients={shells} currentIngredient={'shells'} columns={2}  orderFunction={addSingleItem} orderIndex={0}>
        </ShellForm>

        <Divider/>
*/}
       <ShellForm ingredients={base_layers} currentIngredient={'base_layers'} columns={2}  orderFunction={addSingleItem} orderIndex={1}>
        </ShellForm>

        <Divider/>

        <ShellForm ingredients={seasonings} currentIngredient={'seasonings'} columns={2}  orderFunction={addMultipleItem} orderIndex={2}>
        </ShellForm>
{/*
        <Divider/>
      } 
        <ShellForm ingredients={mixins} currentIngredient={'mixins'} columns={2}  orderFunction={addSingleItem}>
        </ShellForm>

        <Divider/>

        <ShellForm ingredients={condiments} currentIngredient={'condiments'} columns={2}  orderFunction={addSingleItem}>
        </ShellForm>
*/}
        </Grid.Column>
          <Grid.Column width={6}>
            <Cart order={order} numberOfTacos={tacoNumber} price={price} />
          </Grid.Column>
      </Grid>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
