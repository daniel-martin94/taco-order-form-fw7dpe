import React, { Component, useState, useEffect, useCallback } from 'react';
import { render } from 'react-dom';
import GenericForm from './components/GenericForm';
import TacoNumberForm from './components/TacoNumberForm'
import IngredientForm from './components/IngredientForm';
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
  const [endOrder, toggleEnd] = useState(false);
  const [order, setOrder] = useState([])
  const [ingredients, setIngredients] = useState([shells, base_layers, seasonings, mixins, condiments])
  const [title, changeTitle] = useState("Welcome to Dream Taco Shop!");

  const changeOrderState = () => toggleOrder(!startOrder)
  const [tacoNumber, setTacoNumber] = useState(1)
  const [price, setPrice] = useState(0)

  //Determines the users window size and changes layout accordingly
  const [isMobile, toggleMobile] = useState()
  const [width, setWidth] = useState(window.innerWidth);

  const incrementTacoNumber = () => setTacoNumber(tacoNumber + 1)
  const decrementTacoNumber = () => setTacoNumber(tacoNumber - 1)

    var ingredientTypes = {
      0: "shells",
      1: "base_layers",
      2: "seasonings",
      3: "mixins",
      4: 'condiments!'
  }

    var ingredientFunction = {
      0: addSingleItem,
      1: addSingleItem,
      2: addMultipleItem,
      3: addMultipleItem,
      4: addMultipleItem
  }


  function addSingleItem(value, index) {
    let tempOrder = [...order]
    tempOrder[index] = undefined
    setOrder(tempOrder)
    if (tempOrder[index] != undefined) {
      tempOrder.splice(index, 1, value)
    } else {
      tempOrder[index] = value
    }
    setOrder(tempOrder)
  }

  function addMultipleItem(item, index) {
    if (order[index] === undefined || order[index] == []) {
      let tempOrder = [...order]
      tempOrder[index] = [item]
      setOrder(tempOrder)
    } else {
      let tempID = item.id
      let tempOrder = [...order]
      //Delete an item if it exists in the order
      if (tempOrder[index].some(item => item.id === tempID)) {
        let result = tempOrder[index].filter(function (value) {
          if (value.id != item.id) {
            return value
          }
        })
        tempOrder[index] = result
      } else {
        //Add the item
        tempOrder[index].push(item)
      }
      setOrder(tempOrder)
    }
  }

//Updates price based on ingredients
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
  }, [order, tacoNumber])

//Handles resizing width
useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
});

//Determines if mobile
useEffect(() => {
    if (width <= 950) {
        toggleMobile(true)
    } else {
      toggleMobile(false)
    }
}, [width]);
console.log(order)
console.log(startOrder)
  return (
    <Container>
      <br />
      <Header as="h2">{title}</Header>
      <Divider />
      <Grid columns={2} stackable>
      <Transition visible={endOrder} animation='fade left' duration={1000}>
          <div>
            <br />
            <p>
              Thank you for your order!
          </p>
          </div>
        </Transition>
        <Transition visible={startOrder} animation='fade left' duration={1000}>
          <Grid.Column width={11}>

          {
            ingredients.map(function(element, index) {
              return (
                <div>
                    <IngredientForm key={index} ingredients={element} currentIngredient={ingredientTypes[index]} columns={(isMobile ? 2 : 3)} orderFunction={ingredientFunction[index]} orderIndex={index}>
                    </IngredientForm>
                   <Divider />
                </div>
              )
            })
          }
          </Grid.Column>
        </Transition>

        <Transition visible={startOrder} animation='fade left' duration={500}>
          <Grid.Column width={5}>
            <Cart order={order} numberOfTacos={tacoNumber} incrementTacoNumber={incrementTacoNumber} decrementTacoNumber={decrementTacoNumber} price={price} isMobile={isMobile} changeOrderState={()=> {
              toggleEnd(!endOrder)
              toggleOrder(!startOrder)
            }}/>
          </Grid.Column>
        </Transition>

        <Transition visible={(!startOrder && order.length == 0)} animation='fade left' duration={1000}>
          <div>
            <br />
            <p>
              Welcome to Dream Taco Shop, the number one shop for building your dream taco. We're dedicated to giving you the highest quality taco you can imagine, with a focus on fresh ingredients, amazing service, and life-changing flavor.
          </p>
            <p>
              Founded in 1995 by Daniel Martin, the Dream Taco Shop has come a long way from its beginnings operating out of a garage, serving tacos to his neighborhood. When Daniel first started out, his passion for delicious tacos and creative food drove him to quit his job, and gave him the impetus to turn hard work and inspiration into to a booming restaurant. We now serve customers all over the San Francisco Bay Area, and are thrilled to be a part of the innovative wing of the fast food industry.
  
              We hope you enjoy your tacos as much as we enjoy building them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>

            <Button
              floated='right'
              content="Start Building!"
              size="medium"
              icon="arrow circle right"
              onClick={changeOrderState}
              labelPosition="right"
            />
          </div>
        </Transition>

      </Grid>
    </Container>
  );
}

render(<App />, document.getElementById('root'));
