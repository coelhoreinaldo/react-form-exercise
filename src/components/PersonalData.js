import React from 'react';

export default class PersonalData extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
    };
  }

  handleChange = ({ target }) => {
    let { value } = target;
    const { name } = target;
    if (name === 'name') {
      value = value.toUpperCase();
    }

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, cpf } = this.state;
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            maxLength="40"
            value={ name }
            name="name"
            id="name"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            maxLength="50"
            value={ email }
            name="email"
            id="email"
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cpf">
          CPF
          <input
            type="text"
            maxLength="11"
            value={ cpf }
            name="cpf"
            id="cpf"
            onChange={ this.handleChange }
          />
        </label>
      </fieldset>
    );
  }
}
