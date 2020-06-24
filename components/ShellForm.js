import React, { useState } from 'react';
import { render } from 'react-dom';

//Questions
import questions from './questions'

import { Button, Header, Divider, Grid, Segment, Form, Radio, Icon, Label, Checkbox } from "semantic-ui-react";


const ShellForm = ({ currentIngredient, ingredients }) => {

  const [currentSelection, setSelection] = useState()
  const [checked, checkToggle] = useState(false)

  function optionDecide(type, col) {
    // return ingredients.map(function (element, index) {
    //   return (
    //     <Form.Field key={element.id}>
    //       <Grid>
    //         <Grid.Column width={10}>
    //           <Radio
    //               label={element.name}
    //               name='radioGroup'
    //               value={element.id}
    //               key={element.id}
    //               checked={currentSelection === element.id}
    //               onChange={() => {
    //                 setSelection(element.id);
    //                 addSingleItem(element);
    //               }}
    //             />
              
    //         {element.price && element.price > 0 &&
    //             <Label color="green" key={element.id}>
    //               <Icon name='dollar' /> {element.price}
    //             </Label>
    //         }
    //         </Grid.Column>
    //       </Grid>
    //     </Form.Field>
    //   )
    // })

    //Given the number of columns, seperate the ingredients into 
    let colCopy = 0
    let paginatedIngridients = []
    while (colCopy < col && ingredients.length > 0) {
      let tempList = []
      for (let i = 0; i < col; i++) {
        tempList.push(ingredients.shift())
      }
      paginatedIngridients.push(tempList)
      colCopy++
    }
    // console.log(paginatedIngridients)
  }
return (
  <div>
    <Segment>
        <Grid columns='equal'>
          <Grid.Column width={5}>
            <Header as="h3">Shells</Header>
          </Grid.Column>
          <Grid.Column width={11}>
            {optionDecide('shells', 2)}
          </Grid.Column>
        </Grid>
    </Segment>
  </div>
)
}


export default ShellForm