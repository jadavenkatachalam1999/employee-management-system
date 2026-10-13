
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskManager() {
  const { state, dispatch } = useTasks();
  const [taskName, setTaskName] = useState("");

  function handleAddTask() {
    if (taskName.trim() === "") {
      alert("Please enter a task");
      return;
    }

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        name: taskName,
      },
    });

    setTaskName("");
  }

  function handleDeleteTask(id) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  return (
    <div className="container">
      <h1>Task Manager</h1>

      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />

      <button onClick={handleAddTask}>Add Task</button>

      <h2>Task List</h2>

      {state.tasks.length === 0 ? (
        <p>No tasks added yet.</p>
      ) : (
        state.tasks.map((task) => (
          <div key={task.id} className="task-item">
            <span>{task.name}</span>
            <button onClick={() => handleDeleteTask(task.id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskManager;
