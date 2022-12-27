import React from 'react';

// import { Atom, useAtom } from 'jotai';
const Todo = ({ item, idx, handleDbClick }) => {
  const { todo, isDone, id } = item;

  return (
    <div
      className='flex justify-between mt-3 mb-3 p-2  w-11/12 p-3 max-w-10/12  shadow-lg rounded-md '
      onDoubleClick={() => handleDbClick(id)}
    >
      <div className='ml-5 mr-5'>
        <p>Todo:{idx + 1}</p>
      </div>
      <div className='block'>
        <h5 className='text-blue-500'>{todo}</h5>
      </div>
      <div className='ml-4 cursor-pointer flex ml-3 mr-3'>
        <p className={isDone ? 'text-red-400' : 'text-green-600'}>
          <span className='m-2'>{isDone ? '❌' : '✔'}</span>
        </p>
        <p className='text-red-900'>
          <span className='m-2'>{'♻'}</span>
        </p>
      </div>
    </div>
  );
};

export default Todo;
