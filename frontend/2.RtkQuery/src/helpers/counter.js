import { BASE_URL } from '../constants';

export const getCountHelper = async ({ setCount }) => {
  try {
    const fetchData = await fetch(`${BASE_URL}counter`);
    const { count } = await fetchData.json();
    setCount(count);
  } catch (error) {
    console.log('🚀 ~ file: Counter.jsx:17 ~ getCount ~ error:', error);
  }
};

export const incrementCountHelper = async ({ setCount, refetch }) => {
  try {
    const response = await fetch(`${BASE_URL}counter/increment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // const { count } = await response.json();

    refetch();
    // setCount(count);
  } catch (error) {
    console.log('🚀 ~ file: Counter.jsx:29 ~ incrementCount ~ error:', error);
  }
};

export const incrementCountByAmmountHelper = async ({
  setCount,
  ammount,
  refetch,
}) => {
  try {
    const response = await fetch(`${BASE_URL}counter/incrementByAmmount`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ammount: +ammount,
      }),
    });

    // const { count } = await response.json();
    // setCount(count);
    refetch();
  } catch (error) {
    console.log('🚀 ~ file: Counter.jsx:29 ~ incrementCount ~ error:', error);
  }
};

export const setNewCountHelper = async ({ setCount, newCount, refetch }) => {
  try {
    const response = await fetch(`${BASE_URL}counter`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newCount: +newCount,
      }),
    });

    // const { count } = await response.json();
    // setCount(count);
    refetch();
  } catch (error) {
    console.log('🚀 ~ file: Counter.jsx:29 ~ incrementCount ~ error:', error);
  }
};
