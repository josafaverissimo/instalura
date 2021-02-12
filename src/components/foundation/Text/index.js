import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get'
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
  `
}

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}

  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};

  ${propToStyle('textAlign')}

  ${(props) => propToStyle('textAlign', props)}
`

export default function Text({ tag, variant, children, ...props }) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      {...props}
    >
      { children }
    </TextBase>
  )
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Text.defaultPropos = {
  tag: 'span',
  variant: 'paragraph1',
  color: '#0f0'
}
