import React from 'react';
import {
  bool,
  func,
} from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const checkboxBaseProps = {
  id: 'mobility-work',
  label: 'Mobility Work',
};

function MobilityWork({ isChecked, updateWorkout }) {
  const updateMobilityWork = () => updateWorkout('mobilityWork', !isChecked);

  const checkboxProps = {
    checked: isChecked,
    onCheck: updateMobilityWork,
    ...checkboxBaseProps,
  };

  return <Checkbox {...checkboxProps} />;
}

MobilityWork.propTypes = {
  isChecked: bool.isRequired,
  updateWorkout: func.isRequired,
};

export default MobilityWork;
