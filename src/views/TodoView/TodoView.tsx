import { TodoCard, TodoForm } from "../../components";
import { BasicButton } from "../../elements";
import { logoutUser } from "../../store/authSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

export const TodoView = () => {
  const auth = useAppSelector((state) => state.auth);
  const todo = useAppSelector((state) => state.todo);

  const name = auth.username;

  const hasTodos = todo.length > 0;

  return (
    <main className="todoViewContainer">
      <h1 className="banner">TodoView of {name}</h1>
      <section>
        <LogoutUser />
      </section>
      <section>
        <TodoForm />
      </section>
      <ul className="list">
        {!hasTodos && <li className="list">No todos</li>}
        {todo.map((todo, key) => (
          <TodoCard key={key} title={todo.title} text={todo.text} />
        ))}
      </ul>
    </main>
  );
};

const LogoutUser = () => {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  };

  return <BasicButton type="button" text="Logout" onClick={onLogout} />;
};
