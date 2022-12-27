import React, { Suspense } from 'react';
import Todos from './components/todos/Todos';
const App = () => {
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <div
        className='mt-10 w-full display-flex flex-column justify-center 
      align-center
      '
      >
        <Todos />
      </div>
    </Suspense>
  );
};

export default App;
