import React from 'react';
import { render } from 'react-dom';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

const OrderForm = ({ currentQuestion, currentIngredient, changeCurrentIngredient}) => {
  console.table("Current Ingredient: " + currentIngredient)
  return (
      <div>
        <Segment>
          <Header as="h3">Begin by starting an order below!</Header>
          <Button
            content="Next"
            size="medium"
            icon="arrow circle right"
            onClick={changeCurrentIngredient}
            labelPosition="right"
          />
        </Segment>  
      </div>
  )
}


export default OrderForm