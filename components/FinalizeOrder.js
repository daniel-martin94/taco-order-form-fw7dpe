import React from 'react';
import { render } from 'react-dom';
import { Header, Segment } from "semantic-ui-react";

const FinalizeOrder = () => {
  return (
    <div>
      <Segment style={{ backgroundColor: "#FBEC5D" }}>
        <Header as="h3">Thank you for your order!</Header>
      </Segment>
    </div>
  )
}


export default FinalizeOrder