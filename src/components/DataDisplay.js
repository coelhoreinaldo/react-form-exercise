import React from 'react';
import PropTypes from 'prop-types';

export default class DataDisplay extends React.Component {
  render() {
    const { formInfo } = this.props;
    const {
      name, email, cpf,
      address, city, state, addressType,
      resume, role, roleDesc,
    } = formInfo;
    return (
      <div>
        <h1>{name}</h1>
        <p>{`Dados pessoais: ${email}, ${cpf}`}</p>
        <p>{`Endereço: ${address}, ${city}, ${state}, ${addressType}`}</p>
        <p>{`Último emprego: ${resume}, ${role}, ${roleDesc}`}</p>
      </div>
    );
  }
}

DataDisplay.propTypes = {
  formInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    addressType: PropTypes.string.isRequired,
    resume: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roleDesc: PropTypes.string.isRequired,
  }).isRequired,
};
