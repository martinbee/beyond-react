import React from 'react';
import {
  bool,
  func,
} from 'prop-types';

import Checkbox from '../../../Shared/Checkbox';

const id = 'mobility-work';
const checkboxBaseProps = {
  id,
  htmlFor: id,
  label: 'Mobility Work',
};

function MobilityWork({ isChecked, updateWorkout }) {
  const updateMobilityWork = () => updateWorkout('mobilityWork', !isChecked);

  const checkboxProps = {
    checked: isChecked,
    onChange: updateMobilityWork,
    ...checkboxBaseProps,
  };

  return <Checkbox {...checkboxProps} />;
}

MobilityWork.propTypes = {
  isChecked: bool.isRequired,
  updateWorkout: func.isRequired,
};

export default MobilityWork;
