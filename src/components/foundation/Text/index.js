import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariants = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}

  color: ${({ theme, color, mode }) => get(theme, `colors.modes[${mode}].${color}.color`)};

  ${propToStyle('textAlign')}

  ${(props) => propToStyle('textAlign', props)}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      { children }
    </TextBase>
  );
}

Text.defaultPropos = {
  tag: 'span',
  variant: 'paragraph1',
  color: '#0f0',
};

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
