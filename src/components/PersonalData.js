import React from 'react';

export default class PersonalData extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: 0,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    console.log(value);
    this.setState(() => ({
      [name]: value,
    }));
  };

  render() {
    const { name, email, cpf } = this.state;
    return (
      <fieldset>
        <label htmlFor="name">
          Nome
          <input
            type="text"
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
