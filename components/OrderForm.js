import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Container, Header, Divider, Grid, Segment, Form, Radio, Icon, Label } from "semantic-ui-react";


const OrderForm = ({ currentIngredient, changeCurrentIngredient, addToOrder, addSingleItem }) => {

  const [currentSelection, setSelection] = useState()

  function optionDecide(type) {
    if (type == 'shells' || type == 'base_layers') {
      return currentIngredient.data.map(function (element, index) {
        return (
          <Form.Field>
            <Grid>
              <Grid.Column width={10}>
                <Radio
                  label={element.name}
                  name='radioGroup'
                  value={element.id}
                  checked={currentSelection === element.id}
                  onChange={() => {
                    setSelection(element.id);
                    addSingleItem(element);
                  }}
                />
              </Grid.Column>
              {element.price && element.price > 0 &&
                <Grid.Column width={6}>
                  <Label color="green">
                    <Icon name='dollar' /> {element.price}
                  </Label>
                </Grid.Column>
              }
            </Grid>
            <Divider />
          </Form.Field>
        )
      })
    }
  }
  return (
    <div>
      <Segment>
        <Header as="h3">{questions[currentIngredient['type']]}</Header>
        <Form>
          {optionDecide(currentIngredient['type'])}
        </Form>
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