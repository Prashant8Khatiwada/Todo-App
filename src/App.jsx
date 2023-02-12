import { useState, react } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
// import React, { useState } from 'react';

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: 1, task: 'Task 1', completed: false },
//     { id: 2, task: 'Task 2', completed: false },
//     { id: 3, task: 'Task 3', completed: false },
//     { id: 4, task: 'Task 4', completed: false },
//   ]);

//   const [edit, setEdit] = useState({ id: null, task: '' });

//   const handleEdit = (id, task) => {
//     setEdit({ id, task });
//   };

//   const handleUpdate = (id) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             task: edit.task,
//           };
//         }
//         return todo;
//       })
//     );
//     setEdit({ id: null, task: '' });
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>
//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {edit.id === todo.id ? (
//               <>
//                 <input
//                   type="text"
//                   value={edit.task}
//                   onChange={(e) => setEdit({ ...edit, task: e.target.value })}
//                 />
//                 <button onClick={() => handleUpdate(todo.id)}>Update</button>
//               </>
//             ) : (
//               <>
//                 <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
//                   {todo.task}
//                 </span>
//                 <button onClick={() => handleEdit(todo.id, todo.task)}>Edit</button>
//               </>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
