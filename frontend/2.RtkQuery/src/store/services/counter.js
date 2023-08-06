// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../../../1.SimpleFetch/src/constants';

// Define a service using a base URL and expected endpoints
export const counterApi = createApi({
  reducerPath: 'counterApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCounterAmmount: builder.query({
      query: () => 'counter',
      providesTags: ['Counter'],
    }),
    incrementCount: builder.mutation({
      query() {
        return {
          url: 'counter/increment',
          method: 'POST',
        };
      },
      invalidatesTags: ['Counter'],
    }),
    incrementCountByAmmount: builder.mutation({
      query(ammount) {
        return {
          url: 'counter/incrementByAmmount',
          method: 'POST',
          body: {
            ammount,
          },
        };
      },
      invalidatesTags: ['Counter'],
    }),
    setNewCount: builder.mutation({
      query(newCount) {
        return {
          url: 'counter',
          method: 'PATCH',
          body: {
            newCount,
          },
        };
      },
      invalidatesTags: ['Counter'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetCounterAmmountQuery,
  useIncrementCountByAmmountMutation,
  useIncrementCountMutation,
  useSetNewCountMutation,
} = counterApi;
