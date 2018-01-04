import React from 'react';
import {
  string,
  func,
} from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const options = [
  {
    primaryText: 'Warm up',
    value: 'warmup',
  },
  {
    primaryText: 'Core Lift',
    value: 'coreLift',
  },
  {
    primaryText: 'Joker Sets',
    value: 'jokerSets',
  },
  {
    primaryText: 'First Set Last',
    value: 'firstSetLast',
  },
  {
    primaryText: 'Accessory',
    value: 'accessory',
  },
  {
    primaryText: 'Cardio',
    value: 'cardio',
  },
];

function Type({ currentType, updateExercise }) {
  const updateType = (evt, index, value) => updateExercise({ type: value });

  const renderOptions = () => options.map(option => (
    <MenuItem key={option.value} {...option} />
  ));

  return (
    <SelectField
      id="type"
      floatingLabelText="Type"
      value={currentType}
      onChange={updateType}
    >
      {renderOptions()}
    </SelectField>
  );
}

export default Type;
