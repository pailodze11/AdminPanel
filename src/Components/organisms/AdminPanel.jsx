import React, { useState, useEffect } from "react";
import axios from "axios";
import Thead from "./../molecules/Thead";

function App() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const fetchTodo = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        const fetchUsers = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setTodos(fetchTodo.data.slice(0, 10));
        setUsers(fetchUsers.data.slice(0, 10));
      } catch (error) {
        console.error("Erros is: ", error);
      }
    };
    fetchAllData();
  }, []);

  return (
    <div className="flex flex-col p-4 gap-[20px]">
      <h1>All ({todos.length})</h1>
      <Thead todos={todos} users={users} />
    </div>
  );
}

export default App;
