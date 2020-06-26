import React, { useState, useEffect } from 'react'
import { render } from 'react-dom'
import '../style.css'

import { Button, Container, Header, Divider, Grid, Segment, Icon, Form, Label, List, Menu } from "semantic-ui-react";

const Cart = ({ order, numberOfTacos, price, isMobile }) => {

  var cartTitles = {
    0: "Shell",
    1: "Meat",
    2: "Seasonings",
    3: "Mixins",
    4: 'Condiments!'
  }      

  function displayItem() {
    return order.map(function (element, index) {
      //This cover multiple choice items
      if (Array.isArray(element)) {
        if (element.length > 0) {
          return (
            <List.Item key={element.id}>
            <Header as='h5'>
              {cartTitles[index]}
            </Header>
            <List.List>
                {element.map(function (item) {
                  return (
                    <List.Item>
                      <Grid>
                        <Grid.Column width={10}>
                          <div> {item.name} </div>
                        </Grid.Column>
                        {item.price && item.price > 0 &&
                          <Grid.Column width={6} key={item.id}>
                            <div style={{ color: "green" }}>
                              $ {item.price}
                            </div>
                          </Grid.Column>
                        }
                      </Grid>
                    </List.Item>
                  )
                })}
              </List.List>
              <Divider />
            </List.Item>
          )
        }
      } else if (!Array.isArray(element)) {
      return (
        <List.Item key={element.id}>
        <Header as='h5'>
              {cartTitles[index] + "sdsf"}
          </Header>
          <div className='singleMenuTitle'></div>
          <Grid>
            <Grid.Column width={10}>
              <div> {element.name} </div>
            </Grid.Column>
            {element.price && element.price > 0 &&
              <Grid.Column width={6} key={element.id}>
                <div style={{ color: "green" }}>
                  $ {element.price}
                </div>
              </Grid.Column>
            }
          </Grid>
          <Divider />
        </List.Item>
      )
    }})
  }
  return (
    <div>
      <Segment> 
        <Header as="h3">Cart</Header>
        <Divider />
        <List>
          {displayItem()}
          <List.Item> <div style={{fontWeight: 'bold'}}>Number of Tacos: {numberOfTacos}</div></List.Item> 
        </List>
      </Segment>
      <Segment>
          <Grid>
            <Grid.Column width={10}>
              <div> Total </div>
            </Grid.Column>
              <Grid.Column width={6}>
                <Label circular color="green">
                  $ {price * numberOfTacos}
                </Label>
              </Grid.Column>
          </Grid>
      </Segment>
    </div>
  )
}

export default Cart