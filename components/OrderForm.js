import React from 'react';
import { render } from 'react-dom';

//Questions
import { questions } from './questions'
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

const OrderForm = ({ currentIngredient, changeCurrentIngredient}) => {
  console.log(questions[currentIngredient['type']])
  return (
      <div>
        <Segment>
          <Header as="h3">questions</Header>
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