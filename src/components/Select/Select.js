import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue);
  console.log(children)
  return (
    <select value={value} onChange={onChange}>
      {children}
    </select>
  );
};

export default Select;
