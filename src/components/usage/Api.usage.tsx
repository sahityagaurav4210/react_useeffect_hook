import React, { useEffect, useState } from "react";
import { ITodos } from "../../interfaces/todos";

function Api() {
  const [todos, setTodos] = useState<Array<ITodos>>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));

    console.log("fetching todos...");

    return () => {
      console.log("deleting todos...");
      setTodos([]);
    };
  }, []);

  return (
    <>
      <table
        border={1}
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0.25rem",
          margin: "0.25rem",
          borderCollapse: "collapse",
          borderRadius: "0.25rem",
        }}
      >
        <thead
          style={{
            height: "3rem",
            fontSize: "1.25rem",
            backgroundColor: "black",
            color: "whitesmoke",
          }}
        >
          <tr>
            <th>Sr. No.</th>
            <th>User Id</th>
            <th>Title</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody style={{ textAlign: "center" }}>
          {todos.length ? (
            todos.map((todo) => {
              return (
                <React.Fragment key={todo.id}>
                  <tr style={{ height: "2.25rem" }}>
                    <td style={{ padding: "1rem", width: "5%" }}>{todo.id}</td>
                    <td style={{ padding: "1rem", width: "5%" }}>
                      {todo.userId}
                    </td>
                    <td style={{ padding: "1rem", width: "80%" }}>
                      {todo.title}
                    </td>
                    <td style={{ padding: "1rem", width: "10%" }}>
                      {todo.completed ? (
                        <span
                          style={{
                            backgroundColor: "green",
                            color: "white",
                            padding: "0.50rem",
                            borderRadius: "0.50rem",
                          }}
                        >
                          Active
                        </span>
                      ) : (
                        <span
                          style={{
                            backgroundColor: "red",
                            color: "white",
                            padding: "0.50rem",
                            borderRadius: "0.50rem",
                          }}
                        >
                          In-active
                        </span>
                      )}
                    </td>
                  </tr>
                </React.Fragment>
              );
            })
          ) : (
            <>
              <tr>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>N/A</td>
              </tr>
            </>
          )}
          <tr></tr>
        </tbody>
      </table>
    </>
  );
}

export default Api;
