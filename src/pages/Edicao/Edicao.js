import React, { useEffect, useState } from "react";
import Api from "../../api/api";

const Edicao = (props) => {
  const _id = props.match.params.id;
  const history = props.history;

  const [todo, setTodo] = useState({});

  useEffect(() => {
    getTodoById();
  }, []);

  const getTodoById = async () => {
    const response = await Api.fetchGetById(_id);
    const result = await response.json();

    setTodo(result);
  };

  const handleFieldsChange = (event) => {
    const campos = { ...todo };

    campos[event.target.name] = event.target.value;

    setTodo(campos);
  };

  const handleSubmit = async (evento) => {
    evento.preventDefault();

    const todoObj = { ...todo };

    try {
      const response = await Api.fetchPut(todoObj, _id);
      const result = await response.json();
      alert(result.message);
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Edicao da Tarefa</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={todo.titulo}
                    className="form-control"
                    name="titulo"
                    id="floatingInput"
                    placeholder="Digite o Titulo"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Titulo</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    value={todo.descricao}
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Descrição"
                    onChange={handleFieldsChange}
                  />
                  <label htmlFor="floatingInput">Descrição</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select
                    value={todo.prioridade}
                    className="form-control"
                    name="prioridade"
                    id="floatingprioridade"
                    value={todo.prioridade}
                    onChange={handleFieldsChange}
                  >
                    <option value="Alta">Alta</option>
                    <option value="Média">Média</option>
                    <option value="Baixa">Baixa</option>
                  </select>
                  <label htmlFor="floatingprioridade">Prioridade</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select
                    value={todo.status}
                    className="form-control"
                    name="status"
                    id="floatingstatus"
                    value={todo.status}
                    onChange={handleFieldsChange}
                  >
                    <option value="Feito">Feito</option>
                    <option value="Fazer">Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                  </select>
                  <label htmlFor="floatingstatus">Status</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">
                  Enviar
                </button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edicao;
