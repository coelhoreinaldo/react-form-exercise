import React from 'react';
import PropTypes from 'prop-types';

export default class ProfessionalData extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseOn = this.handleMouseOn.bind(this);

    this.state = {
      globalAlert: false,
    };
  }

  handleMouseOn() {
    const { globalAlert } = this.state;
    if (!globalAlert) {
      global.alert('Preencha com cuidado esta informação.');
      this.setState({
        globalAlert: true,
      });
    }
  }

  render() {
    const { onChange, formInfo } = this.props;
    const { resume, role, roleDesc } = formInfo;
    return (
      <fieldset>
        <label>
          Resumo do currículo
          <textarea
            maxLength="1000"
            onChange={ onChange }
            name="resume"
            value={ resume }
          />
        </label>
        <label>
          Cargo
          <input
            type="text"
            maxLength="40"
            onChange={ onChange }
            name="role"
            value={ role }
            onMouseEnter={ this.handleMouseOn }
          />
        </label>
        <label>
          Descrição do cargo
          <textarea
            maxLength="500"
            onChange={ onChange }
            name="roleDesc"
            value={ roleDesc }
          />
        </label>
      </fieldset>
    );
  }
}

ProfessionalData.propTypes = {
  onChange: PropTypes.func.isRequired,
  formInfo: PropTypes.shape({
    resume: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    roleDesc: PropTypes.string.isRequired,
  }).isRequired,
};
