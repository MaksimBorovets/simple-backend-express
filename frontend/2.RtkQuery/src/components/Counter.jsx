import React, { useEffect, useState } from 'react';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import {
  useGetCounterAmmountQuery,
  useIncrementCountByAmmountMutation,
  useIncrementCountMutation,
  useSetNewCountMutation,
} from '../../../2.RtkQuery/src/store/services/counter';

export const Counter = () => {
  const [ammount, setAmmount] = useState(null);
  const [newCount, setNewCount] = useState(null);

  const { data } = useGetCounterAmmountQuery();
  const [increment] = useIncrementCountMutation();
  const [incrementByAmmount] = useIncrementCountByAmmountMutation();
  const [setNewCountMutation] = useSetNewCountMutation();

  const incrementByAmmountBtnHandler = () => {
    incrementByAmmount(ammount);
  };

  const setNewCountBtnHandler = () => {
    setNewCountMutation(newCount);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h1>Count {data?.count}</h1>

      <div className="card">
        <button onClick={increment}>count is {data?.count}</button>
      </div>
      <div>
        <input
          type="number"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
        />
        <button disabled={!ammount} onClick={incrementByAmmountBtnHandler}>
          Icrement By Ammount
        </button>
      </div>
      <div>
        <input
          type="number"
          value={newCount}
          onChange={(e) => setNewCount(e.target.value)}
        />
        <button disabled={!newCount} onClick={setNewCountBtnHandler}>
          Set New Count
        </button>
      </div>
    </>
  );
};
