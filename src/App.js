// ToDoList
import React, { useState } from 'react';
import './App.css';

function App() {
 const [todos, setTodos] = useState([]);
 const [input, setInput] = useState('');

 const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput('');
 };

 const deleteTodo = (index) => {
    let newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
 };

 return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default App;




















// ********************************************************************************************************************************************************************************************************************************************************************************************************
// Shopping List
// import React, { useState } from 'react';
// import './App.css';

// function App() {
//  const [list, setList] = useState([]);
//  const [item, setItem] = useState('');

//  const addToList = () => {
//     setList([...list, item]);
//     setItem('');
//  };

//  const removeFromList = (index) => {
//     let newList = [...list];
//     newList.splice(index, 1);
//     setList(newList);
//  };

//  return (
//     <div className="App">
//       <h1>Shopping List</h1>
//       <input 
//         type="text" 
//         value={item} 
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button onClick={addToList}>Add to List</button>
//       <ul>
//         {list.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => removeFromList(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//  );
// }

// export default App;