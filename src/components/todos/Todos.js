import React, { useRef } from 'react';
import { atom, useAtom } from 'jotai';
import { v4 } from 'uuid';
import Todo from '../Todo';
const todosAtom = atom([]);
const inputsValueAtom = atom('');
const idAtom = atom('');
const editIdAtom = atom(' ');
const isDoneAtom = atom(false);
const isEditingAtom = atom(false);

const Todos = () => {
  const [todosList, setTodosList] = useAtom(todosAtom);
  const [inputsValue, setInputsValue] = useAtom(inputsValueAtom);
  const [isDone, setIsDone] = useAtom(isDoneAtom);
  const [isEditing, setIsEditing] = useAtom(isEditingAtom);
  const [iD, setID] = useAtom(idAtom);
  const [editID, setEditID] = useAtom(editIdAtom);

  const inputRef = useRef();

  // * Handling inputs value
  const handleInput = (e) => {
    setInputsValue(e.target.value);
  };
  // * submit the form
  const handleSubmit = (e) => {
    // * Preventing default values and rerendering
    e.preventDefault();

    // * validating inputs values
    if (inputsValue.trim() !== '') {
      // * Clearing input for next todo
      setInputsValue('');
      setID(v4());
      setIsEditing(false);
      setIsDone(false);
      // * Building our todo list to map over later
      setTodosList([
        ...todosList,
        {
          id: iD,
          todo: inputsValue,
          isDone: isDone,
          isEditing: isEditing,
        },
      ]);
    }

    if (inputsValue && isEditing) {
      setTodosList(
        todosList.map((item) => {
          if (item.id === editID) {
            return { ...item, todo: inputsValue };
          }
          return item;
        })
      );

      setInputsValue('');
      setIsEditing(false);
    }
  };

  // ! handling todo functions start

  // * handling editing existing todo
  const handleDbClick = (id) => {
    inputRef.current.focus();
    const specificItem = todosList.find((item) => item.id === id);
    setIsEditing(true);
    setInputsValue(specificItem.todo);
    setEditID(id);
  };

  // ! handling todo functions end

  return (
    <div className='flex flex-col items-center justify-center '>
      <h3 className='text-blue-500 font-bold tracking-wider mt-5 mb-8'>
        Add Your to todos here!
      </h3>
      <form className='rounded-md shadow-md p-2'>
        <input
          className=':hover border-none :focus outline-none p-2 text-black'
          ref={inputRef}
          value={inputsValue}
          onChange={(e) => handleInput(e)}
          type='text'
          placeholder='Write your todos...'
        />

        <button onClick={handleSubmit}>{isEditing ? 'Edit' : 'Add'}</button>
      </form>
      <div className='mt-6 mb-9'>
        {todosList.length > 0 ? (
          todosList.map((item, idx) => {
            return (
              <div
                key={item.id}
                className='flex flex-col items-center justify-center  w-full   overflow-x-hidden '
              >
                {<Todo item={item} idx={idx} handleDbClick={handleDbClick} />}
              </div>
            );
          })
        ) : (
          <h3 className='text-blue-400 tracking-widest border-b-2'>
            Nothing to show
          </h3>
        )}
      </div>

      <div className='mt-10'>
        <p className='text-gray-400 tracking-wider capitalize mt-4 '>
          double click to edit entered todo
        </p>
        <p className='text-gray-400 tracking-wider capitalize mt-4 '>
          use the ✔ to checkout the todo
        </p>
        <p className='text-gray-400 tracking-wider capitalize mt-4 '>
          use the X to bring back the todo
        </p>
      </div>
    </div>
  );
};

export default Todos;
