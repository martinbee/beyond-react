import React from 'react';

import Message from '../Message';

const loadingMessages = [
  'Pumping iron...',
  'Brewing a data shake',
  'Arnold SchworkingOnIt',
  'Do you even lift?',
  'Lifting expectations!',
];

export default function Loading() {
  const getRandomNumber = () => Math.floor(Math.random() * 5);
  const getRandomLoadingMessage = () => loadingMessages[getRandomNumber()];

  return <Message content={getRandomLoadingMessage()} />;
}

// add gif here of weight lifting
