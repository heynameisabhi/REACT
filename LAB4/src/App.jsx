import { useState } from 'react';
import './App.css'; 
const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px"
  },
  input: {
    padding: "8px",
    width: "200px",
    marginRight: "10px"
  },
  addButton: {
    padding: "8px 12px"
  },
  list: {
    listStyleType: "none",
    padding: 0
  },
  completedTask: {
    textDecoration: "line-through",
    color: "gray"
  },
  pendingTask: {
    textDecoration: "none"
  },
  deleteButton: {
    marginLeft: "10px"
  }
};

const ToDoFunction = () => {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [taskInput, setTaskInput] = useState(""); // Input field state

  // Add Task
  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  // Toggle Task Completion
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={styles.container}>
      <h1>React To-Do List</h1>

      {/* Input Field */}
      <div>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task..."
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>

      {/* Task List */}
      <ul style={styles.list}>
        {tasks.map((task, index) => (
          <li
            key={index}
            style={
              task.completed ? styles.completedTask : styles.pendingTask
            }
          >
            <span
              onClick={() => toggleTask(index)}
              style={{ cursor: "pointer" }}
            >
              {index + 1}. {task.completed ? "✔" : "✘"} {task.text}
            </span>

            <button
              onClick={() => deleteTask(index)}
              style={styles.deleteButton}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoFunction;
