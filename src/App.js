import React from 'react';
import Address from './components/AddressData';
import PersonalData from './components/PersonalData';

class App extends React.Component {
  render() {
    return (
      <form>
        <PersonalData />
        <Address />
      </form>
    );
  }
}

export default App;
