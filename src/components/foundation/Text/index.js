import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/Link';

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
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typographyVariants.titleXS.fontSize};
      font-weight: ${theme.typographyVariants.titleXS.fontWeight};
      line-height: ${theme.typographyVariants.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typographyVariants.title.fontSize};
          font-weight: ${theme.typographyVariants.title.fontWeight};
          line-height: ${theme.typographyVariants.title.lineHeight};
        `}
      `,
  })}
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}

  color: ${({ theme, color, mode }) => get(theme, `colors.modes[${mode}].${color}.color`)};

  ${propToStyle('textAlign')}

  ${(props) => propToStyle('textAlign', props)}
`;

export default function Text({
  tag,
  variant,
  children,
  href,
  ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        href={href}
        variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        { children }
      </TextBase>
    );
  }
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
  children: null,
  color: '#0f0',
  href: '',
};

Text.propTypes = {
  tag: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
