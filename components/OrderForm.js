import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Container, Header, Divider, Grid, Segment, Form, Radio, Icon, Label, Checkbox } from "semantic-ui-react";


const OrderForm = ({ currentIngredient, changeCurrentIngredient, addToOrder, addSingleItem }) => {

  const [currentSelection, setSelection] = useState()
  const [multipleSelection, setMultipleSelection] = useState([])
  const [checked, checkToggle] = useState(false)

  function deleteIngredient(){
    console.log("delete")
  }
  function addIngredient(){
    console.log("add")
  }
  function toggleIngredient () {
    checkToggle(!checked)
    {checked ? deleteIngredient() : addIngredient()}
  }

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
                  key={element.id}
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

    //Other types of ingredients
    return currentIngredient.data.map(function (element, index) {
        return (
          <Form.Field>
            <Grid>
              <Grid.Column width={10}>
                <Checkbox 
                label={element.name} 
                key={index}
                value={element.id}
                onClick={toggleIngredient}
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