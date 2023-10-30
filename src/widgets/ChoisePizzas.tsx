import React from 'react';
import '../assets/scss/widgets/_choise-pizzas.scss';
import { SelectMenu } from '../components/SelectMenu';
import { pizzasApi } from '../redux';
import { PizzaItem } from '../components/PizzaItem';

const pizzaTypes = ['Все', 'Острые', 'Мясные', 'Сырные', 'Веганские'];

export const ChoisePizzas = () => {
  const { data, isLoading, isError } = pizzasApi.useGetPizzasQuery();

  return (
    <div className='choise-pizzas'>
      <h2 className='choise-pizzas__title'>Выберите пиццу</h2>
      <SelectMenu
        className='choise-pizzas-types'
        menuItems={pizzaTypes}
        horizontalMargin={40}
        initialActiveItem={0}
      />
      <div className='pizzas-list'>
        {isLoading && data && <h2 style={{ textAlign: 'center' }}>Загрузка</h2>}
        {isError && <h2 style={{ textAlign: 'center' }}>Произошла ошибка</h2>}
        {data && data.map(el => <PizzaItem {...el} key={el.id} />)}
      </div>
    </div>
  );
};
