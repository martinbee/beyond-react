import React from 'react';

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

  return (
    <div>{getRandomLoadingMessage()}</div>
  );
}

// add gif here of weight lifting
