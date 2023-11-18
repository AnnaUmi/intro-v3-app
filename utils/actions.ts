"use server";

import { revalidatePath } from "next/cache";
import db from "./db";

export const completeTodo = async (id) => {
  await db.todo.update({
    where: { id },
    data: {
      completed: true,
    },
  });
  revalidatePath("/todos");
};

export const newTodo = async (formContent) => {
  const todo = await db.todo.create({
    data: {
      content: formContent.get("content"),
    },
  });
  //   update that route after fetch
  revalidatePath("/todos");
};
