import React from 'react';
import AddressData from './components/AddressData';
import PersonalData from './components/PersonalData';
import handleValue from './utils/handleValue';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      addressType: 'house',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCityBlur = this.handleCityBlur.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    const newValue = handleValue(name, value);

    this.setState((previousState) => ({
      ...previousState,
      [name]: newValue,
    }));
  }

  handleCityBlur({ target }) {
    const { name, value } = target;

    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
    for (let i = 0; i < numbers.length; i += 1) {
      if (value.split('')[0].includes(i)) {
        const newValue = '';
        this.setState((previousState) => ({
          ...previousState,
          [name]: newValue,
        }));
      }
    }
  }

  render() {
    return (
      <form>
        <PersonalData
          onChange={ this.handleChange }
          formInfo={ this.state }
        />
        <AddressData
          onChange={ this.handleChange }
          formInfo={ this.state }
          onBlur={ this.handleCityBlur }
        />
      </form>
    );
  }
}

export default App;
