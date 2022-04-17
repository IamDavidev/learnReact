// import { useState, useEffect } from 'react';
import useApi from '../hooks/useApi.js';

const URL__API = 'https://jsonplaceholder.typicode.com/posts';

const Conceptos = () => {
  const res = useApi(URL__API);
  return (
    <div className>
      <h1>Conceptos</h1>
      {res?.map((item) => {
        return (
          <div key={item.id} className="post">
            <h3 className="titlePost">{item.title}</h3>
            <p className="bodyPost"> l{item.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Conceptos;
