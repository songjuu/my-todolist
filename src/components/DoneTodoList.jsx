import React from "react";

////done 부분 todolist
const DoneTodoList = (props) => {
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
          className="todolist-box-button-back"
          onClick={() => props.handleBack(props.todo.id)}
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default DoneTodoList;
