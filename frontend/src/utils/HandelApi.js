import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAlltodo = (setTodo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data--->", data);
    setTodo(data);
  });
};

const addTodo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAlltodo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateTodo = (todoId, text, setTodo, setText, setIsUpdate) => {
  axios
    .post(`${baseUrl}/update`, { _id: todoId, text })
    .then((data) => {
      setText("");
      setIsUpdate(false);
      getAlltodo(setTodo);
    })
    .catch((err) => console.log(err));
};


const deleteTodo = (_id ,setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAlltodo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAlltodo, addTodo, updateTodo,deleteTodo };
