import React from 'react';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  // for handling input
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  // ++++creates objects input text whith is stored++++
  // prevents the input from being refreshed back to empty
  // makes an object injectin input text +++ inputTextHandler
  //setinputText resets the input to null used from state
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText('');
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        // value input text it gets updated by input text Handler
        value={inputText}
        onChange={inputTextHandler}
        type='text'
        className='todo-input'
      />
      <button onClick={submitTodoHandler} className='todo-button' type='submit'>
        <i className='fas fa-plus-square'></i>
      </button>
      <div className='select'>
        <select onChange={statusHandler} name='todos' className='filter-todo'>
          <option value='all'>All</option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
