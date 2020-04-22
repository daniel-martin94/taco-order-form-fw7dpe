import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Container, Header, Divider, Grid, Segment, Form, Radio, Icon, Label, Checkbox } from "semantic-ui-react";


const OrderForm = ({ currentIngredient, changeCurrentIngredient, addToOrder, addSingleItem, addMultipleItem }) => {

  const [currentSelection, setSelection] = useState()
  const [checked, checkToggle] = useState(false)

  function optionDecide(type) {
    return currentIngredient.data.map(function (element, index) {
      return (
        <Form.Field key={element.id}>
          <Grid>
            <Grid.Column width={10}>
              { 
                (type == 'shells' || type == 'base_layers') && 
                  <Radio
                  label={element.name}
                  name='radioGroup'
                  value={element.id}
                  key={element.id}
                  checked={currentSelection === element.id}
                  onChange={() => {
                    setSelection(element.id);
                    addSingleItem(element);
                  }}
                />
              }
              { 
                (type != 'shells' && type != 'base_layers') &&
                  <Checkbox
                  label={element.name}
                  value={element.id}
                  key={element.id}
                  onClick={() => {
                    addMultipleItem(element);
                  }}
                />
              }
              </Grid.Column>
            {element.price && element.price > 0 &&
              <Grid.Column width={6}>
                <Label color="green" key={element.id}>
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