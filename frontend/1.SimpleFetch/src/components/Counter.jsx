import React, { useEffect, useState } from 'react';

import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import '../App.css';
import {
  getCountHelper,
  incrementCountByAmmountHelper,
  incrementCountHelper,
  setNewCountHelper,
} from '../helpers/counter';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [ammount, setAmmount] = useState(null);
  const [newCount, setNewCount] = useState(null);
  const [isRefetch, setIsRefetch] = useState(false);

  const refetch = () => {
    setIsRefetch((p) => !p);
  };

  useEffect(() => {
    getCountHelper({ setCount });
  }, [isRefetch]);

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
      <div className="card">
        <button onClick={() => incrementCountHelper({ setCount, refetch })}>
          count is {count}
        </button>
      </div>
      <div>
        <input
          type="number"
          value={ammount}
          onChange={(e) => setAmmount(e.target.value)}
        />
        <button
          disabled={!ammount}
          onClick={() => incrementCountByAmmountHelper({ setCount, ammount, refetch })}>
          Icrement By Ammount
        </button>
      </div>
      <div>
        <input
          type="number"
          value={newCount}
          onChange={(e) => setNewCount(e.target.value)}
        />
        <button
          disabled={!newCount}
          onClick={() => setNewCountHelper({ setCount, newCount , refetch})}>
          Set New Count
        </button>
      </div>
    </>
  );
};
