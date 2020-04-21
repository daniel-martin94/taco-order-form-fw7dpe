import React from 'react';
import { render } from 'react-dom';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

const TacoNumberForm = ({ toggleOrderState, numberOfTacos, incrementTacoNumber, decrementTacoNumber }) => {
  return (
    <div>
      <Segment style={{ backgroundColor: "#FBEC5D" }}>
        <Header as="h3">How many of these delicious tacos do you want?</Header>
        <Header as="h3">I can eat {numberOfTacos} taco(s)! </Header>
        <Button.Group>
          {numberOfTacos > 1 &&
            <Button
              onClick={decrementTacoNumber}
            >Eat less tacos :(
          </Button>}
          <Button
            onClick={incrementTacoNumber}
          >Add more!</Button>
          <Button
            content="Review Order"
            size="medium"
            icon="arrow circle right"
            onClick={toggleOrderState}
            labelPosition="right"
          />
        </Button.Group>
      </Segment>
    </div>
  )
}


export default TacoNumberForm