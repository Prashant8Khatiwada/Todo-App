import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin5Line } from "react-icons/ri";
function TodoList() {
  const [list, setList] = useState([]);

  // assigning the array to list items
  const addTodo = (task) => {
    if (!task.text || /^\s*$/.test(task.test)) {
      return;
    }
    const newList = [task, ...list];
    setList(newList);
    console.log(newList);
  };
  return (
    <div className="container">
      <h1>Manage Your Time Here! </h1>
      <div className="todo-container">
        <TodoForm onSubmit={addTodo} />

        {/* mapping the array  */}
        <div className="todo-lists">
          <ul>
            {list.map((items) => {
              return (
                <li key={items.id}>
                  {items.text}
                  <span className="del-icon">
                    <RiDeleteBin5Line />
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
