import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Header, Divider, Grid, Segment, Form, Radio, Icon, Label, Checkbox } from "semantic-ui-react";


const ShellForm = ({ currentIngredient, ingredients }) => {

  const [currentSelection, setSelection] = useState()
  const [checked, checkToggle] = useState(false)

console.log(ingredients)
  function optionDecide(type) {
    return ingredients.map(function (element, index) {
      return (
        <Form.Field key={element.id}>
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
      <Header as="h3">Shells</Header>
      <Form>
        {optionDecide('shells')}
      </Form>
      <Button
        content="Next"
        size="medium"
        icon="arrow circle right"
        labelPosition="right"
      />
    </Segment>
  </div>
)
}


export default ShellForm