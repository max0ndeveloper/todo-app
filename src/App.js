import Header from "./components/header/header.component";
import './App.css'
import AddTodo from "./components/add-todo/add-todo.component";
import TodoPage from "./components/todo-page/todo-page.component";


function App() {

  return (
      <div className="container">
        <Header/>
        <AddTodo/>
        <TodoPage/>
      </div>
  );
}

export default App;
