import React from 'react';
import { Action } from './Action';
import { ChoisePizzas } from './ChoisePizzas';
import { DeliveryAndPayment } from './DeliveryAndPayment';

export const Main = () => {
  return (
    <main className='main'>
      <Action />
      <ChoisePizzas />
      <DeliveryAndPayment />
    </main>
  );
};
