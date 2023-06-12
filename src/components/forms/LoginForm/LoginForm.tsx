import { useState, FormEventHandler } from "react";

import { useAppDispatch } from "../../../store/hooks";
import { BasicButton, TextField } from "../../../elements";
import { loginUser } from "../../../store/authSlice";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    dispatch(
      loginUser({
        username,
        password,
      })
    );
  };

  return (
    <>
      <form onSubmit={submitHandler} className="loginFormContainer">
        <TextField
          label="username"
          type="text"
          placeHolder="YourUsername23"
          isRequired={true}
          onChange={setUsername}
        />
        <BasicButton text="Submit" type="submit" />
      </form>
    </>
  );
};
