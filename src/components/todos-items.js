import React from "react";
import TodosItem from "./todos-item";
import { useSelector } from "react-redux";

const TodosItems = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <ul className="list-group list-group-flush">
      {
        todos.length>0 ? todos.map(item=>{
          <TodosItem/>
        })
      }
    </ul>
  );
};

export default TodosItems;
