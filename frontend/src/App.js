import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, getAlltodo, updateTodo, deleteTodo } from "./utils/HandelApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  const [todoId, setTodoId] = useState("");

  useEffect(() => {
    getAlltodo(setTodo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setText(text);
    setTodoId(_id);
  };

  const pressEnter = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (text.trim() !== "") {
      if (isUpdate) {
        updateTodo(todoId, text, setTodo, setText, setIsUpdate);
      } else {
        addTodo(text, setText, setTodo);
      }
      setText(""); // Clear the input field after adding/updating
      setIsUpdate(false);
    }
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <div className="card mh-100 ">
              <div className="card-header bg-primary">
                <h3 className="h3 fw-bold text-white">Todo App</h3>
              </div>
              <div className="card-body"></div>
              <div className="row px-3">
                <div className="col-md-12">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      name=""
                      id=""
                      className="form-control"
                      placeholder="Add your today task"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onKeyDown={pressEnter} // Attach the event handler
                    />
                    <button
                      type="button"
                      className="btn btn-primary"
                      id="button-addon2"
                      onClick={handleAddTask} // Call the function on button click
                    >
                      {isUpdate ? "Update" : "Add Task"}
                    </button>
                  </div>

                  <div className="vh-100 overflow-auto">
                    <div className="my-3">
                      {todo.map((item) => (
                        <Todo
                          key={item._id}
                          text={item.text}
                          updateMode={() => updateMode(item._id, item.text)}
                          deleteTodo={() => deleteTodo(item._id, setTodo)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
