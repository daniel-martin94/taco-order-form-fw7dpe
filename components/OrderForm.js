import React from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Container, Header, Divider, Grid, Segment, Form, Radio } from "semantic-ui-react";


const OrderForm = ({ currentIngredient, changeCurrentIngredient, addToOrder }) => {

  // const ThemeContext = React.createContext(themes.light);

  let options = currentIngredient.data.map(function (element, index) {
    return (

      <Form.Field>
        <Radio
          label={element.name}
          name='radioGroup'
          value={element.id}
          key={element.id}
          onChange={addToOrder}
        />
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