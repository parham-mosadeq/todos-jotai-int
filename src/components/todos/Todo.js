import React from 'react';

// import { Atom, useAtom } from 'jotai';
const Todo = ({ item, idx, handleDbClick, handleRemove, handleDone }) => {
  const { todo, id } = item;

  return (
    <div
      className={`flex justify-between mt-3 mb-3 p-2  w-11/12 p-3 max-w-10/12  shadow-lg rounded-md  `}
    >
      <div className='ml-5 mr-5'>
        <p onClick={(e) => handleDone(e)} className='cursor-pointer'>
          Todo:{idx + 1}
        </p>
      </div>
      <div className={'block'}>
        <h5
          onDoubleClick={() => handleDbClick(id)}
          className='text-blue-500 cursor-pointer'
        >
          {todo}
        </h5>
      </div>
      <div className='ml-4 cursor-pointer flex ml-3 mr-3'>
        <p onClick={() => handleRemove(id)} className='text-red-900'>
          <span className='m-2'>{'♻'}</span>
        </p>
      </div>
    </div>
  );
};

export default Todo;
