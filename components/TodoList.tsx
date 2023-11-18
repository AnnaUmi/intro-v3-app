"use client";
import { completeTodo } from "@/utils/actions";

const TodoList = ({ todos }) => {
  return (
    <div>
      {todos?.map((todo) => (
        <div key={todo.id}>
          <div
            style={
              todo.completed
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {todo.content}
          </div>
          <button onClick={() => completeTodo(todo.id)}>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
