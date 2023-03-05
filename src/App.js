import React from 'react';
import Address from './components/AddressData';
import PersonalData from './components/PersonalData';
import handleValue from './utils/handleValue';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    const newValue = handleValue(name, value);

    this.setState((previousState) => ({
      ...previousState,
      [name]: newValue,
    }));
  }

  render() {
    return (
      <form>
        <PersonalData onChange={ this.handleChange } formInfo={ this.state } />
        <Address />
      </form>
    );
  }
}

export default App;
