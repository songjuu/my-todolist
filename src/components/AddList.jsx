import React from "react";
import "../css/addList.css";

function AddList() {
  return (
    <form className="form-bg">
      <div className="form-content">
        <label>제목</label>
        <input className="form-title" type="text"></input>
        <label>내용</label>
        <input className="form-text" type="text"></input>
        <button>추가하기</button>
      </div>
    </form>
  );
}

export default AddList;
