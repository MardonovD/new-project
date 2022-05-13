import React from "react";

const TodosForm = () => {
  return (
    <div className="card-body">
      <form className="mb-3 d-flex justify-content-between align-items-center">
        <div>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="running..."
          />
        </div>
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default TodosForm;
