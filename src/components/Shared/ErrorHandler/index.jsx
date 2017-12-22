import React from 'react';
import {
  shapeOf,
  string,
} from 'prop-types';

import Message from '../Message';

export default function ErrorHandler({ error }) {
  console.log(error);

  // add logic here for displaying different messages based on error status code
  // i.e. our server dun goofed
  return <Message isError content={error.message} />;
}
