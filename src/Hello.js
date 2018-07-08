import React from 'react';
import { withMessageContext } from './MessageContainer';

const Name = (props) => (
  <h1>Hello {props.name}!</h1>
);

export default withMessageContext(Name);
