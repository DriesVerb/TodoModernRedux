import { useState, FormEventHandler } from "react";
import { useDispatch } from "react-redux";

import { BasicButton, TextField } from "../../../elements";
import { addTodo } from "../../../store/todoSlice";

export const TodoForm = () => {
  const [showForm, setShowForm] = useState(true);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const cleanForm = () => {
    setTitle("");
    setText("");
  };

  const cancelForm = () => {
    cleanForm();
    setShowForm(false);
  };

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!title) {
      setShowForm(true);
      return;
    }

    dispatch(
      addTodo({
        title,
        text,
      })
    );

    cleanForm();
  };

  return (
    <>
      <form className="todoFormContainer" onSubmit={submitHandler}>
        {showForm && (
          <>
            <TextField
              value={title}
              label="Title"
              isRequired={true}
              type="text"
              placeHolder="title"
              onChange={setTitle}
            />
            <TextField
              value={text}
              label="Task"
              isRequired={false}
              type="text"
              placeHolder="title"
              onChange={setText}
            />
          </>
        )}
        <div className="buttons">
          <BasicButton type="submit" text="add task" />
          {showForm && (
            <BasicButton type="button" text="cancel" onClick={cancelForm} />
          )}
        </div>
      </form>
    </>
  );
};
