import React, { Component } from 'react';

import Checkbox from '../../../Shared/Checkbox';


export default class MobilityWork extends Component {
  state = {
    isChecked: false,
  };

  toggleMobilityWork = () => {
    // logic to add MobilityWork to workout object

    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  }

  render() {
    const id = 'mobility-work';

    const checkboxProps = {
      id,
      htmlFor: id,
      checked: this.state.isChecked,
      label: 'Mobility Work',
      onChange: this.toggleMobilityWork,
    };

    return <Checkbox {...checkboxProps} />;
  }
}
