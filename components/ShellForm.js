import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Header, Divider, Grid, Segment, Form, Radio, Icon, Label, Checkbox } from "semantic-ui-react";


const ShellForm = ({ currentIngredient, ingredients, columns, orderFunction }) => {

  const [currentSelection, setSelection] = useState()
  const [checked, checkToggle] = useState(false)
  function optionDecide(type, col) {

    //Given the number of columns, seperate the ingredients into 
    let colCopy = 0
    let paginatedIngredients = []
    let ingredientPointer = 0

    while (ingredientPointer < ingredients.length) {
      //each templist represents a row on the grid
      let tempList = []
      //each entry in templist is a column
      for(let i = 0; i < col; i++) {
        tempList.push(ingredients[ingredientPointer])
        ingredientPointer++
      }
      
      if (tempList.length == col) {
        paginatedIngredients.push(tempList)
      }
    }
    return (
      <Grid columns={col}>
        {paginatedIngredients.map(function (element, index) {
            return (<Grid.Row>
              {element.map(function (e, i) {
                if (e !== undefined) {
                  return (
                    <Grid.Column>
                      <Radio
                        label={(e.price && e.price > 0) ? e.name + " + $" + e.price : e.name}
                        name='radioGroup'
                        value={e.id}
                        key={e.id}
                        checked={currentSelection === e.id}
                        onChange={() => {
                        setSelection(e.id);
                        orderFunction(e);
                      }}
                      />
                  </Grid.Column>
                  )
                }
              })}
            </Grid.Row>
            )
        })}
      </Grid>
    )

  }
return (
  <div>
        <Grid columns='equal'>
          <Grid.Column width={5}>
            <Header as="h3">{optionDecide(currentIngredient)}</Header>
          </Grid.Column>
          <Grid.Column width={11}>
            {optionDecide(currentIngredient, columns)}
          </Grid.Column>
        </Grid>
  </div>
)
}


export default ShellForm