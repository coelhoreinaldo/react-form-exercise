import React from 'react';

export default class PersonalData extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: null,
    };
  }

  handleChange = ({ target }) => {
    let { value } = target;
    const { name } = target;
    const NAME_LIMIT = 40;
    const EMAIL_LIMIT = 50;
    const CPF_LIMIT = 11;
    if (name === 'name') {
      value = value.toUpperCase();
      if (value.length > NAME_LIMIT) return;
    }
    if (name === 'email' && value.length > EMAIL_LIMIT) return;
    if (name === 'cpf' && value.length > CPF_LIMIT) return;

    console.log(value);
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
