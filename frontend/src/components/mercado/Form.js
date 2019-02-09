import React, { Component } from "react";
// import { connect } from react-redux;
// import PropTypes from 'prop-types';
// import { addProduto } from '../../actions/';

export class Form extends Component {
  // state = {
  //     nome = '',
  //     descrição = '',
  //     seção = ''
  // }

  // static propTypes = {
  //     addProduto: PropTypes.func.isRequired
  // }

  // onChange = e => this.setState({[e.target.name]: e.target.value})

  // onSubmit = e => {
  //     e.preventDefault();
  //     const { nome, descrição, seção } = this.state;
  //     const app = { nome, descrição, seção };
  //     this.props.addProduto(app)
  // }

  render() {
    return (
      <div>
        <h1>Inserir Produto</h1>
      </div>
    );
  }
}

export default Form;
