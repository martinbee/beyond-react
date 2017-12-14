import React, { Component } from 'react';

import Checkbox from '../../../Shared/Checkbox';


const id = 'mobility-work';
const checkboxBaseProps = {
  id,
  htmlFor: id,
  label: 'Mobility Work',
};

export default class MobilityWork extends Component {
  state = {
    isChecked: false,
  };

  toggleMobilityWork = () => {
    // logic to add MobilityWork to workout object

    this.setState(prevState => ({ isChecked: !prevState.isChecked }));
  }

  render() {
    const checkboxProps = {
      checked: this.state.isChecked,
      onChange: this.toggleMobilityWork,
      ...checkboxBaseProps,
    };

    return <Checkbox {...checkboxProps} />;
  }
}
