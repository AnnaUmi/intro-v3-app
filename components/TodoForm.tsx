import { newTodo } from "@/utils/actions";
import React from "react";

const TodoForm = () => {
  // it works without js on pure html standarts on web
  return (
    <div>
      <form action={newTodo}>
        <input type="text" name="content" />
        <button>Done</button>
      </form>
    </div>
  );
};

export default TodoForm;
