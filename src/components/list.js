import React, { useState } from 'react';
import Todo from './todo';

const List = ({data, onRemove, onAddTodo, onRemoveTodo}) => {
  const [value, setValue] = useState('');

  const handleAddTodo = () =>{
    onAddTodo({name: value});
    setValue('');
  }

  return(
    <div className="lists">
      <div className="list-header">
        <b>{data.name}</b>
        <button onClick={onRemove}>X</button>
      </div>
      <div>
        {data.items.map((item, i) => {
          return <Todo key={i} data={item} onRemove={(i) => onRemoveTodo(i)}/>
        })}
      </div>
      <div className="list-todo">
        <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Todo Name"/>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  )
}

export default List;