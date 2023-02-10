import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
function TodoList() {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState([]);

  // assigning the array to list items
  const addTodo = (task) => {
    if (!task.text || /^\s*$/.test(task.test)) {
      return;
    }
    const newList = [task, ...list];
    setList(newList);
  };

  // const editList = (id, text) => {
  //   id, text;
  // };

  // deleting the todo list
  const deleteList = (id) => {
    window.confirm("Are you Sure?");
    setList((task) => {
      return list.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div className="container">
      <h1>Manage Your Time Here! </h1>
      <div className="todo-container">
        <TodoForm onSubmit={addTodo} onEdit={editList} />

        {/* mapping the array  */}
        <div className="todo-lists">
          <ul>
            {list.map((items) => {
              return (
                <li key={items.id}>
                  {items.text}
                  <span>
                    <BiEditAlt
                      className="icon edit-icon"
                      onClick={() => editList(items.id, items.text)}
                    />
                    <RiDeleteBin5Line
                      className=" icon del-icon"
                      onClick={() => deleteList(items.id)}
                    />
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
