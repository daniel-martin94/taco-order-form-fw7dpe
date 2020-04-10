import React from 'react';
import { render } from 'react-dom';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

const WelcomeForm = ({toggleOrderState, ingredients}) => {
  console.log("Welcome")
  return (
      <div>
        <Segment style={{backgroundColor:"#FBEC5D"}}>
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


export default WelcomeForm