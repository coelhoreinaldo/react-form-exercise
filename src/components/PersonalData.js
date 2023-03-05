import React from 'react';
import PropTypes from 'prop-types';

export default class PersonalData extends React.Component {
  render() {
    const { onChange, formInfo } = this.props;
    const { name, email, cpf } = formInfo;
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
            onChange={ onChange }
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
            onChange={ onChange }
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
            onChange={ onChange }
          />
        </label>
      </fieldset>
    );
  }
}

PersonalData.propTypes = {
  onChange: PropTypes.func.isRequired,
  formInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
  }).isRequired,
};
