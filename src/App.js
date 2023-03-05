import React from 'react';
import AddressData from './components/AddressData';
import DataDisplay from './components/DataDisplay';
import PersonalData from './components/PersonalData';
import ProfessionalData from './components/ProfessionalData';
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
      addressType: 'casa',
      resume: '',
      role: '',
      roleDesc: '',
      displayData: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleCityBlur = this.handleCityBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ displayData: true });
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <PersonalData
          onChange={ this.handleChange }
          formInfo={ this.state }
        />
        <AddressData
          onChange={ this.handleChange }
          formInfo={ this.state }
          onBlur={ this.handleCityBlur }
        />
        <ProfessionalData
          onChange={ this.handleChange }
          formInfo={ this.state }
        />
        <button type="submit">Enviar</button>
        <DataDisplay formInfo={ this.state } />
      </form>
    );
  }
}

export default App;
