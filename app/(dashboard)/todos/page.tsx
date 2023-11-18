import TodoList from "@/components/TodoList";
import db from "@/utils/db";
const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};
const Home = async () => {
  const todos = await getData();
  console.log("todos", todos);
  return (
    <div>
      BLA
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
