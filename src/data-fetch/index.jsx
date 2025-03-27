import axios from "axios";
import React, { useEffect, useState } from "react";

const DataFetch = () => {
  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => {
  //       setTodo(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       setError("Error while fetching the data");
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        );
        if (!response.ok) {
          throw new Error("Network response not OK");
        }
        const data = await response.json();
        setTodo(data);
        setLoading(false);
      } catch (err) {
        setError("Error while loading the data");
        setLoading(false);
      }
    };
    fetchData()
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>TODOS</h1>
      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong> -{" "}
            {todo.completed ? "Completed" : "Incomplete"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetch;
