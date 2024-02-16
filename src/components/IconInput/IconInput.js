import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    height: 36,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{ '--size': styles.iconSize + 'px' }}>
        <Icon id="search" strokeWidth={1} size={styles.iconSize} />
      </IconWrapper>
      <Input placeholder="holder" style={{
        '--width': width + 'px',
        '--height': styles.height / 16 + 'rem',
        '--font-size': styles.fontSize / 16 + 'rem',
      }}></Input>
    </Wrapper>);
};

const Wrapper = styled.label`
  position: relative;
`

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid black; 
  padding-left: 30px;
  height: var(--height);
  width: var(--width);
  font-size: var(--font-size);
`

export default IconInput;
