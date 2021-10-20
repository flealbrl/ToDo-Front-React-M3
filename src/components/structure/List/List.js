import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Api from "../../../api/api";

const List = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    const response = await Api.fetchGetAll();
    const data = await response.json(); 
    setTodo(data); 
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
      {todo.map(
        (
          todo,
          index 
        ) => (
          <Card data={todo} key={index} />
        )
      )}
    </div>
  );
};

export default List;
