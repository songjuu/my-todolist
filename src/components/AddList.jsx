import React, { useState } from "react";
import "../css/addList.css";

const AddList = () => {
  return (
    <div className="add-list">
      <form className="form-bg">
        <div className="form-content">
          <label>제목</label>
          <input className="form-title" type="text" />
          <label>내용</label>
          <input className="form-text" type="text" />
        </div>
        <button>추가하기</button>
      </form>
      <div></div>
    </div>
  );
};

export default AddList;
