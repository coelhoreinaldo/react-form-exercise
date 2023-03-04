import React from 'react';
import countryStates from '../countryStates';

export default class Address extends React.Component {
  constructor() {
    super();

    this.state = {
      address: '',
      city: '',
      state: '',
      addressType: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { address, city, state, addressType } = this.state;
    return (
      <fieldset>
        <label htmlFor="address">
          Endereço
          <input
            type="text"
            value={ address }
            name="address"
            id="address"
            onChange={ this.handleChange }
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
            onChange={ this.handleChange }
            maxLength="28"
            // onBlur={ this.handleCityBlur }
          />
        </label>
        <label htmlFor="state">
          Estado
          <select
            value={ state }
            name="state"
            id="state"
            onChange={ this.handleChange }
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
              id="house"
              name="addressType"
              value="house"
              checked={ addressType === 'house' }
              onChange={ this.handleChange }
            />
          </label>

          <label>
            Apartamento
            <input
              type="radio"
              id="apart"
              name="addressType"
              value="apart"
              checked={ addressType === 'apart' }
              onChange={ this.handleChange }
            />
          </label>
        </label>
      </fieldset>
    );
  }
}
