import React from "react";
import Todo from "./Todo";


const ToDoList = ({todos,setTodos,filteredtodos}) =>{
    return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredtodos.map(todo => (
            <Todo  setTodos={setTodos} todos={todos} 
            todo={todo}
            key={todo.id} text={todo.text} />
        ))}
      </ul>
    </div>
    )
};
export default ToDoList;