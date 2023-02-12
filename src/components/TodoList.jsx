import { useState } from "react";
import TodoForm from "./TodoForm";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import { CiSaveUp2 } from "react-icons/ci";
function TodoList() {
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState({ id: null, text: "" });

  // assigning the array to list items
  const addTodo = (task) => {
    if (!task.text || /^\s*$/.test(task.test)) {
      return;
    }
    const newList = [task, ...list];
    setList(newList);
  };

  // handle editing list
  const editList = (id, text) => {
    setEdit({ id, text });
  };

  // handleUpdate edited list
  const handleUpdate = (id) => {
    setList(
      list.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            text: edit.text,
          };
        }
        return todo;
      })
    );
    setEdit({ id: null, text: "" });
  };

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
        <TodoForm onSubmit={addTodo} />

        {/* mapping the array  */}

        <div className="todo-lists">
          <ul>
            {list.map((items) => {
              return (
                <li key={items.id}>
                  {edit.id === items.id ? (
                    <>
                      <input
                        className="update-input"
                        type="text"
                        value={edit.text}
                        onChange={(e) =>
                          setEdit({ ...edit, text: e.target.value  })
                        }
                      />
                      <CiSaveUp2
                        className="icon edit-icon"
                        onKeyDown={(e) => {
                          e.keyCode === 13 &&
                            e.shiftKey === false &&
                            handleSubmit();
                        }}
                        onClick={() => handleUpdate(items.id)}
                      />
                    </>
                  ) : (
                    <>
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
                    </>
                  )}
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
