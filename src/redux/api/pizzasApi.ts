import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pizza } from '../../types';

export const pizzasApi = createApi({
  reducerPath: 'pizzasApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004' }),
  endpoints: builder => ({
    getPizzas: builder.query<Pizza[], void>({
      query: () => `/pizzas`,
    }),
  }),
});
