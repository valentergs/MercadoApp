import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addProd } from "../../actions/produtos";

export class Form extends Component {
  state = {
    nome: "",
    descrição: "",
    seção: ""
  };

  static propTypes = {
    addProd: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { nome, descrição, seção } = this.state;
    const produto = { nome, descrição, seção };
    this.props.addProd(produto);
    this.setState({
      nome: "",
      descrição: "",
      seção: ""
    });
  };

  render() {
    const { nome, descrição, seção } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Inserir Produto</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nome</label>
            <input
              type="text"
              className="form-control"
              name="nome"
              onChange={this.onChange}
              value={nome}
            />
          </div>
          <div className="form-group">
            <label>Descrição</label>
            <input
              type="text"
              className="form-control"
              name="descrição"
              onChange={this.onChange}
              value={descrição}
            />
          </div>
          <div className="form-group">
            <label>Seção</label>
            <input
              type="text"
              className="form-control"
              name="seção"
              onChange={this.onChange}
              value={seção}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addProd }
)(Form);
