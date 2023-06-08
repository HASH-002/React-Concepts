import { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    const task = {
      name: newTask,
      isCompleted: false
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (taskIndex) => {
    setTodoList(todoList.filter((task, index) => index !== taskIndex));
  };

  const completeTask = (taskIndex) => {
    setTodoList(todoList.map((task, index) => {
      if (index === taskIndex) task.isCompleted = true;
      return task;
    }));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={(e) => { setNewTask(e.target.value); }} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task, index) => {
          return (<Task task={task.name} index={index} isCompleted={task.isCompleted}
            deleteTask={deleteTask} completeTask={completeTask} />);
        })}
      </div>
    </div>
  );
}

export default App;
