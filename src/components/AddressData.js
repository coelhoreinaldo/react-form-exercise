import React from 'react';
import PropTypes from 'prop-types';
import countryStates from '../countryStates';

export default class AddressData extends React.Component {
  render() {
    const { onChange, onBlur, formInfo } = this.props;
    const { address, city, state, addressType } = formInfo;
    return (
      <fieldset>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            value={ address }
            name="address"
            id="address"
            onChange={ onChange }
            maxLength="200"
          />
        </label>
        <label htmlFor="city">
          Cidade
          <input
            type="text"
            value={ city }
            name="city"
            id="city"
            onChange={ onChange }
            maxLength="28"
            onBlur={ onBlur }
          />
        </label>
        <label htmlFor="state">
          Estado
          <select
            value={ state }
            name="state"
            id="state"
            onChange={ onChange }
          >
            {countryStates
              .map((item) => <option key={ item }>{item}</option>)}
          </select>
        </label>
        <label>
          Tipo
          <label>
            Casa
            <input
              type="radio"
              id="casa"
              name="addressType"
              value="Casa"
              checked={ addressType === 'Casa' }
              onChange={ onChange }
            />
          </label>

          <label>
            Apartamento
            <input
              type="radio"
              id="apartamento"
              name="addressType"
              value="Apartamento"
              checked={ addressType === 'Apartamento' }
              onChange={ onChange }
            />
          </label>
        </label>
      </fieldset>
    );
  }
}

AddressData.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  formInfo: PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    addressType: PropTypes.string.isRequired,
  }).isRequired,
};
