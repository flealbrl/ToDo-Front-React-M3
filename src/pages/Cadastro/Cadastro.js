import React from "react";
import "./Cadastro.css";
import Api from "../../api/api";

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    
    const titulo = evento.target.titulo.value;
    const prioridade = evento.target.prioridade.value;
    const descricao = evento.target.descricao.value;
    const status = evento.target.status.value;

    const todo = {
      titulo,
      prioridade,
      descricao,
      status
    }

    try {
      const response = await Api.fetchPost(todo);
      const result = await response.json();
      alert(result.message);
      history.push("/"); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container cadastro">
      <div className="card mt-5">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastre sua tarefa: </h3>
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
                    className="form-control"
                    name="titulo"
                    id="floatingInput"
                    placeholder="Digite o Titulo"
                  />
                  <label htmlFor="floatingInput">Título</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select
                    className="form-control"
                    name="prioridade"
                    id="floatingprioridade"
                    placeholder="Digite a Prioridade"
                  >
                    <option value="Alta">Alta</option>
                    <option value="Media">Média</option>
                    <option value="Baixa">Baixa</option>
                  </select>
                  <label htmlFor="floatingstatus">Prioridade</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="descricao"
                    id="floatingInput"
                    placeholder="Digite a Descricao"
                  />
                  <label htmlFor="floatingInput">Descrição</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <select
                    className="form-control"
                    name="status"
                    id="floatingstatus"
                    placeholder="Digite o Status"
                  >
                    <option value="Fazer">Fazer</option>
                    <option value="Fazendo">Fazendo</option>
                    <option value="Feito">Feito</option>
                  </select>
                  <label htmlFor="floatingstatus">Status</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
