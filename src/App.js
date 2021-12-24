import React, { useState } from "react";
import * as styles from "./App.module.scss";
import Todo from "./Components/Todo";
const App = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [todos, setTodos] = useState([]);

  const inputHandler = (event) => {
    const value = event.target.value;
    console.log(`value ${value}`);
    console.log(`input ${input}`);
    if (
      (value.length <= 5 && input.length > value.length) ||
      value.length >= 10
    ) {
      setInput(value);
      setError(true);
      console.log(`if part ${value}`);
    } else {
      // this.setState({ ...this.state, error: true });
      setError(false);
      setInput(value);
      console.log(`else part ${value}`);
    }

    setInput(value);
  };

  const onClickHandler = () => {
    const newTodos = [...todos, input];
    setTodos(newTodos);
    setInput("");
  };

  const deleteHandler = (id) => {
    console.log("tried to delete");
    const newTodo = [...todos];
    newTodo.splice(id, 1);
    setTodos(newTodo);
  };

  // console.log(this.state);
  const todosList = todos.map((element, index) => {
    return (
      <Todo
        todo={element}
        key={index}
        id={index}
        deleteItem={() => deleteHandler(index)}
      />
    );
  });
  const errorMsg = (
    <span className={styles.errorMsg}>
      Please enter some text greater than 5 and less than 10 to add to todo list
    </span>
  );
  let inputClasses = styles.input;
  let buttonClasses = styles.button;
  if (error) {
    inputClasses = [styles.input, styles.inputError].join(" ");
    buttonClasses = [styles.button, styles.errorButton].join(" ");
  }
  return (
    <div className={styles.App}>
      <p>Add Items and Then Remove respective item upon click</p>
      <input
        type="text"
        autoFocus
        className={inputClasses}
        onChange={(e) => inputHandler(e)}
        value={input}
      />
      {error ? errorMsg : null}
      <button
        className={buttonClasses}
        onClick={() => onClickHandler()}
        disabled={error || !input}
        style={error || !input ? { cursor: "not-allowed" } : null}
      >
        Add item
      </button>
      {todosList}
    </div>
  );
};

export default App;
