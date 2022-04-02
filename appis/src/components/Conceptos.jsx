import { useState, useEffect } from 'react';
import useApi from '../hooks/useApi.js';

const URL__API = 'https://jsonplaceholder.typicode.com/posts';

const Conceptos = (props) => {
  const res = useApi(URL__API);
  console.log(res);
  return (
    <>
      <h1>Conceptos</h1>
      {res?.map((item) => {
        return (
          <>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </>
        );
      })}
    </>
  );
};

export default Conceptos;
