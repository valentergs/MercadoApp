import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProds, deleteProd } from "../../actions/produtos";

export class Produtos extends Component {
  static propTypes = {
    produtos: PropTypes.array.isRequired,
    getProds: PropTypes.func.isRequired,
    deleteProd: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProds();
  }

  render() {
    return (
      <Fragment>
        <h2>Lista de Produtos</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Seção</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.produtos.map(x => (
              <tr key={x.id}>
                <td>{x.nome}</td>
                <td>{x.descrição}</td>
                <td>{x.seção}</td>
                <td>
                  <button
                    onClick={this.props.deleteProd.bind(this, x.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Apagar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  produtos: state.produtos.produtos
});

export default connect(
  mapStateToProps,
  { getProds, deleteProd }
)(Produtos);
