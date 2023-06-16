import React from "react";

//working 부분 todolist
const WorkingTodoList = (props) => {
  return (
    <div className="list-container">
      <h3>{props.todo.title}</h3>
      <div>{props.todo.body}</div>
      <div className="button-set">
        <button
          className="todolist-box-button-delete"
          onClick={() => props.handleDelete(props.todo.id)}
        >
          삭제
        </button>
        <button
          className="todolist-box-button-done"
          onClick={() => props.handleDone(props.todo.id)}
        >
          완료
        </button>
      </div>
    </div>
  );
};

export default WorkingTodoList;
