import React from "react";
import { Link } from "react-router-dom";
import './Card.css'

const Card = (props) => {
  const todo = props.data;
  return (
    <Link to={`/view/${todo._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{todo.titulo}</h5>
          <span className="badge bg-light text-dark">{todo.prioridade}</span>
          <span className="badge bg-light text-dark">{todo.descricao}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
