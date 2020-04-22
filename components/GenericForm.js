import React from 'react';
import { render } from 'react-dom';
import { Button, Container, Header, Divider, Grid, Segment } from "semantic-ui-react";

const GenericForm = ({ message, buttonContent, toggleOrderState }) => {
  return (
      <div>
        <Segment style={{backgroundColor:"#FBEC5D"}}>
          <Header as="h3">{message}</Header>
          {buttonContent && 
            <Button
              content={buttonContent}
              size="medium"
              icon="arrow circle right"
              onClick={toggleOrderState}
              labelPosition="right"
            />
          }
        </Segment>  
      </div>
  )
}


export default GenericForm