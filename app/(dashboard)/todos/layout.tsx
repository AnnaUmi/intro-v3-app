import TodoForm from "@/components/TodoForm";
import React from "react";

const FormLayout = ({ children }) => {
  return (
    <div>
      {/* we put form here just in order to dont wait till todos list fetched instanly  */}
      FormLayout
      <TodoForm />
      {children}
    </div>
  );
};

export default FormLayout;
