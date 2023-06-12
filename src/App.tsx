import { useAppSelector } from "./store/hooks";
import { LoginView, TodoView } from "./views/";

function App() {
  const auth = useAppSelector((state) => state.auth);

  const isLoggedIn = auth.authenticated;

  return (
    <section className="app">
      {!isLoggedIn && <LoginView />}
      {isLoggedIn && <TodoView />}
    </section>
  );
}

export default App;
