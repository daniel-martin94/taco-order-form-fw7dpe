import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Container, Header, Divider, Grid, Segment, Form, Radio, Icon, Label } from "semantic-ui-react";


const OrderForm = ({ currentIngredient, changeCurrentIngredient, addToOrder }) => {

  // const ThemeContext = React.createContext(themes.light);
  const [currentSelection, setSelection] = useState()

  let options = currentIngredient.data.map(function (element, index) {
    console.log(element.price)
    return (
      <Form.Field>
        <Grid>
          <Grid.Column width={10}>
            <Radio
              label={element.name}
              name='radioGroup'
              value={element.id}
              onChange={}
            />
          </Grid.Column>
          {element.price &&
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
  return (
    <div>
      <Segment>
        <Header as="h3">{questions[currentIngredient['type']]}</Header>
        <Form>
          {options}
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