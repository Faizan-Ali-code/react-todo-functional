import React from "react";
import * as styles from "./Todo.module.scss";
const Todo = (props) => {
  return (
    <div className={styles.todo} onClick={() => props.deleteItem(props.key)}>
      <ul>
        <li>{props.todo}</li>
      </ul>
    </div>
  );
};

export default Todo;
