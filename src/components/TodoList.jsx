import React from "react";
import AddList from "./AddList";
import ViewList from "./ViewList";
import "../css/todoList.css";

function TodoList() {
  return (
    <div className="layout">
      <header className="title">My TodoList✍</header>
      <AddList />
    </div>
  );
}

export default TodoList;
