import React from "react";
import ReactDOM from "react-dom";
import todos from "./reducers/todos";
import TodosFooter from "./components/todos-footer";
import TodosForm from "./components/todos-form";
import TodosHeader from "./components/todos-header";
import TodosItem from "./components/todos-item";
import TodosItems from "./components/todos-items";
const App = () => {
  return (
    <div className="ui container ">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader />
            <TodosForm />
            <TodosItems />
            <TodosFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
