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
  const [order, setOrder] = useState([])
  const [ingredients, setIngredients] = useState([])
  const [title, changeTitle] = useState("Welcome to Dream Taco Shop!");
  const changeOrderState = () => toggleOrder(!startOrder)
  const [tacoNumber, setTacoNumber] = useState(1)
  const [price, setPrice] = useState(0)

  //Determines the users window size and changes layout accordingly
  const [isMobile, toggleMobile] = useState()
  const [width, setWidth] = useState(window.innerWidth);

  const changeOrderState = () => toggleOrder(!startOrder)


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
  }, [order])

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

  return (
    <Container>
      <br />
      <Header as="h2">{title}</Header>
      <Divider />
      <Grid columns={2} stackable>
        <Transition visible={startOrder} animation='fade left' duration={1000}>
          <Grid.Column width={11}>
            {/*}
          
          {startOrder == true && ingredients.length == 0 &&
            <TacoNumberForm
              numberOfTacos={tacoNumber}
              incrementTacoNumber={incrementTacoNumber}
              decrementTacoNumber={decrementTacoNumber}
              toggleOrderState={changeOrderState} />

          {/*{startOrder == false && ingredients.length == 0 &&
            <GenericForm message={'Thank you for your order!'} />
          }*/}
            <IngredientForm key={0} ingredients={shells} currentIngredient={'shells'} columns={(isMobile ? 2 : 3)} orderFunction={addSingleItem} orderIndex={0}>
            </IngredientForm>
            <Divider />
            <IngredientForm ingredients={base_layers} currentIngredient={'base_layers'} columns={(isMobile ? 2 : 3)} orderFunction={addSingleItem} orderIndex={1}>
            </IngredientForm>

            <Divider />

            <IngredientForm ingredients={seasonings} currentIngredient={'seasonings'} columns={(isMobile ? 2 : 3)} orderFunction={addMultipleItem} orderIndex={2}>
            </IngredientForm>

            <Divider />

            <IngredientForm ingredients={mixins} currentIngredient={'mixins'} columns={(isMobile ? 2 : 3)} orderFunction={addMultipleItem} orderIndex={3}> </IngredientForm>

            <Divider />

            <IngredientForm ingredients={condiments} currentIngredient={'condiments'} columns={(isMobile ? 2 : 3)} orderFunction={addMultipleItem} orderIndex={4}> </IngredientForm>


          </Grid.Column>
        </Transition>

        <Transition visible={startOrder} animation='fade left' duration={500}>
          <Grid.Column width={5}>
            <Cart order={order} numberOfTacos={tacoNumber} price={price} isMobile={isMobile}/>
          </Grid.Column>
        </Transition>

        <Transition visible={!startOrder} animation='fade left' duration={1000}>
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
