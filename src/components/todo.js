import React from 'react';

const Todo = ({data, onRemove}) => {
    return(
        <>
            <div className="todo-item-container">
                <span>{data.name}</span>
                <button onClick={onRemove}>X</button>
            </div>
        </>
    )
}

export default Todo;    