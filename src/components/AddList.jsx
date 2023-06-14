import React, { useState } from "react";
import "../css/addList.css";

const TodoList = (props) => {
  return (
    <div className="list-container">
      <h3>{props.todo.title}</h3>
      <div>{props.todo.body}</div>
      <div className="button-set">
        <button
          className="todolist-box-button"
          onClick={() => props.handleDelete(props.todo.id)}
        >
          삭제하기
        </button>
      </div>
    </div>
  );
};

const AddList = () => {
  //기본 데이터
  const [todoLists, setTodoLists] = useState([
    { id: 0, title: "공부", body: "js 공부하기", isDone: false },
    { id: 1, title: "운동", body: "10시에 운동가기", isDone: false },
  ]);

  //유저 입력값 담을 곳 선언
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // console.log("title", title);
  // console.log("body", body);

  //버튼 클릭시 제목, 내용 담은 박스리스트 추가하기
  const addListEvent = () => {
    const newTodoList = {
      id: todoLists.length + 1,
      title,
      body,
    };
    setTodoLists([...todoLists, newTodoList]);

    //input안 빈 값으로 만들어주기
    setTitle("");
    setBody("");
    // console.log(newTodoList);
  };

  //삭제 하기 기능 구현
  const deleteButton = (id) => {
    const newTodoListDelete = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(newTodoListDelete);
  };

  return (
    <div className="todolist">
      <form className="add-list">
        <div className="form-content">
          {/* 인풋 이벤트 들어온 입력 값 제목, 내용 업데이트 */}
          <label>제목</label>
          <input
            className="form-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>내용</label>
          <input
            className="form-text"
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <button onClick={addListEvent} type="button">
          추가하기
        </button>
      </form>
      <main className="view-list">
        <h2>Working🔥</h2>
        <div className="list-wrapper">
          {todoLists.map((todo) => {
            return (
              <TodoList todo={todo} key={todo.id} handleDelete={deleteButton} />
            );
          })}
        </div>
        <h2>Done🎉</h2>
      </main>
    </div>
  );
};

export default AddList;
