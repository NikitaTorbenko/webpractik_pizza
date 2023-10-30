import React from 'react';
import { Action } from './Action';
import { ChoisePizzas } from './ChoisePizzas';

export const Main = () => {
  return (
    <main style={{ height: 9000 }} className='main'>
      <div className='container'>
        <Action />
        <ChoisePizzas />
      </div>
    </main>
  );
};
