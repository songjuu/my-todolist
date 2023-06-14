import React, { useState } from "react";
import "../css/addList.css";

const TodoList = (props) => {
  return (
    <div className="list-container">
      <h3>{props.todo.title}</h3>
      <div>{props.todo.body}</div>
      <div className="button-set">
        <button className="todolist-box-button">삭제</button>
      </div>
    </div>
  );
};

const AddList = () => {
  //기본 데이터
  const todoLists = [
    { id: 0, title: "공부", body: "js 공부하기", isDone: false },
    { id: 1, title: "운동", body: "10시에 운동가기", isDone: false },
  ];

  return (
    <div className="todolist">
      <form className="add-list">
        <div className="form-content">
          <label>제목</label>
          <input className="form-title" type="text" />
          <label>내용</label>
          <input className="form-text" type="text" />
        </div>
        <button>추가하기</button>
      </form>
      <main className="view-list">
        <h2>Working🔥</h2>
        <div className="list-wrapper">
          {todoLists.map((todo) => {
            return <TodoList todo={todo} key={todo.id} />;
          })}
        </div>
        <h2>Done🎉</h2>
      </main>
    </div>
  );
};

export default AddList;
