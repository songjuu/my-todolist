import React, { useState } from "react";
import "../css/addList.css";

//working 부분 todolist
const TodoList = (props) => {
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

const AddList = () => {
  //기본 데이터
  const [todoLists, setTodoLists] = useState([
    {
      id: 0,
      title: "공부",
      body: "JS, react 강의 듣고 공부하기",
      isDone: true,
    },
    {
      id: 1,
      title: "운동",
      body: "10시에 헬스장 가기",
      isDone: false,
    },
  ]);

  //유저 입력값 담을 곳 선언
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //추ㄱ 클릭시 제목, 내용 담은 박스리스트 추가하기
  const addListEvent = () => {
    const newTodoList = {
      id: todoLists.length + 1,
      title,
      body,
      isDone: false,
    };
    setTodoLists([...todoLists, newTodoList]);

    //input안 빈 값으로 만들어주기
    setTitle("");
    setBody("");
  };

  // ----완료, 삭제, 취소 버튼 구현------

  //삭제하기 기능 구현
  const deleteButton = (id) => {
    const newTodoListDelete = todoLists.filter((todo) => todo.id !== id);
    setTodoLists(newTodoListDelete);
  };

  //완료하기 기능 구현
  const doneButton = (id) => {
    const newTodoListDone = todoLists.map((todo) =>
      todo.id === id ? { ...todo, isDone: true } : todo
    );

    setTodoLists(newTodoListDone);
  };

  //취소하기 기능 구현
  const backButton = (id) => {
    const newTodoListDone = todoLists.map((todo) =>
      todo.id === id ? { ...todo, isDone: false } : todo
    );

    setTodoLists(newTodoListDone);
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
            if (todo.isDone === false) {
              return (
                <TodoList
                  todo={todo}
                  key={todo.id}
                  handleDelete={deleteButton}
                  handleDone={doneButton}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2>Done🎉</h2>
        <div className="list-wrapper">
          {todoLists.map((todo) => {
            if (todo.isDone === true) {
              return (
                <DoneTodoList
                  todo={todo}
                  key={todo.id}
                  handleDelete={deleteButton}
                  handleBack={backButton}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </main>
    </div>
  );
};

export default AddList;
