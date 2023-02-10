import { React, useState } from "react";

function TodoForm(props) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // passing the task to TodoList as props as an array
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: task,
    });
    setTask("");
  };
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Yout Task Here..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <input className="todo-btn" type="submit" value="Add Task" />
    </form>
  );
}

export default TodoForm;
