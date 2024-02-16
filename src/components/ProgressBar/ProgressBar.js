/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return (
    <div>
      <Input
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100">
        <Progress style={{
          '--width': value + '%',
        }}></Progress>
      </Input>
    </div>
  );
};

const Input = styled.div`
  width: 200px;
  background-color: ${COLORS.transparentGray15};
  border-radius: 4px;
  overflow: hidden;
`

const Progress = styled.div`
  width: var(--width);
  height: 20px;
  background-color: ${COLORS.primary}; 
`

export default ProgressBar;
