import React from 'react';
import '../assets/scss/widgets/_choise-pizzas.scss';
import { SelectMenu } from '../components/SelectMenu';
import { pizzasApi } from '../redux';
import { PizzaItem } from '../components/PizzaItem';
import { menuItemsType } from '../types';

const pizzaTypes: menuItemsType[] = [
  {
    title: 'Все',
    icon: 1,
  },
  {
    title: 'Острые',
    icon: 2,
  },
  {
    title: 'Мясные',
    icon: 3,
  },
  {
    title: 'Сырные',
    icon: 4,
  },
  {
    title: 'Веганские',
    icon: 5,
  },
];

export const ChoisePizzas = () => {
  const { data, isLoading, isError } = pizzasApi.useGetPizzasQuery();

  return (
    <div className='container'>
      <div className='choise-pizzas'>
        <h2 className='choise-pizzas__title'>Выберите пиццу</h2>
        <SelectMenu
          className='choise-pizzas-types'
          menuItems={pizzaTypes}
          horizontalMargin={40}
          initialActiveItem={0}
        />
        <div className='pizzas-list'>
          {isLoading && data && (
            <h2 style={{ textAlign: 'center' }}>Загрузка</h2>
          )}
          {isError && <h2 style={{ textAlign: 'center' }}>Произошла ошибка</h2>}
          {data && data.map(el => <PizzaItem {...el} key={el.id} />)}
        </div>
      </div>
    </div>
  );
};
