import React from "react";

const Todo = ({ text , updateMode,deleteTodo }) => {
  return (
    <div>
      <div className="">
        <div className="alert alert-primary" role="alert">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h6 className="h6">{text}</h6>
            </div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    menu
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <button className="dropdown-item" onClick={updateMode}>
                        Update
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item text-danger" onClick={deleteTodo}>
                        Delete
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
