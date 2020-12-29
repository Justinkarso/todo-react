import React, { useState } from 'react';
import List from './list';

const Lists = () => {
  const [listTitle, setListTitle] = useState("");
  const [lists, setLists] = useState([]);

  const handleCreateList = () => {
    const newList = [... lists]
    newList.push({
      id: new Date().getTime(),
      name: listTitle,
      items: []
    });
    setLists(newList)
    setListTitle("")
  }

  const handleRemoveList = (list) =>{
    const newList = [... lists]
    const foundIndex = newList.findIndex((other) => other.id === list.id)
    newList.splice(foundIndex, 1)
    setLists(newList)
  }

  const handleAddTodo = (list, todo) => {
    const newList = [... lists]
    const foundIndex = newList.findIndex((other) => other.id === list.id)
    newList[foundIndex].items = [...newList[foundIndex].items, todo];
    setLists(newList)
  }

  const handleRemoveTodo = (list, todoIndex) => {
    const newList = [... lists]
    const foundIndex = newList.findIndex((other) => other.id === list.id)
    newList[foundIndex].items.splice(todoIndex, 1)
    setLists(newList)
  }

  return (
    <>
      <div className="create-list">
        <input
          type="text"
          value={listTitle}
          onChange={(e) => setListTitle(e.target.value)}
          placeholder="List Name"
        />
        <button onClick={handleCreateList}>Create New List</button>
      </div>
      <div className="list-container">
        {lists.map((list, i) => {
          return (
            <List
              key={i}
              data={list}
              onRemove={() => handleRemoveList(list)}
              onAddTodo={(todo) => handleAddTodo(list, todo)}
              onRemoveTodo={(todoIndex) => handleRemoveTodo(list, todoIndex)}
            />
          );
        })}
      </div>
    </>
  );
};

export default function App() {
  return (
    <>
      <Lists />
    </>
  );
}