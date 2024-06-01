import React from "react";

function Task({handleDelete,text,category}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={()=> handleDelete(text) }>X</button>
    </div>
  );
}

export default Task;
