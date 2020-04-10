import React from 'react';
import { render } from 'react-dom';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

const OrderForm = ({toggleOrderState, ingredients}) => {
  return (
      <div>
        <Segment>
          <Header as="h3">Begin by starting an order below!</Header>
          <Button
            content="Let's start an order!"
            size="medium"
            icon="arrow circle right"
            onClick={toggleOrderState}
            labelPosition="right"
          />
        </Segment>  
      </div>
  )
}


export default OrderForm