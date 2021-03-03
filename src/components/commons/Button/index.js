import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ variant, theme, mode }) => get(theme, `colors.modes[${mode}].${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${({ variant, theme, mode }) => get(theme, `colors.modes[${mode}].${variant}.contrastText`)};
  background-color: ${({ variant, theme, mode }) => get(theme, `colors.modes[${mode}].${variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${TextStyleVariants.smallestException}

  ${(props) => (props.ghost ? ButtonGhost : ButtonDefault)}
  
  &:hover {
    opacity: .5;
  }

  ${(props) => !props.notStyleFocus && css`
    &:focus {
      opacity: .5;
    }`}

  ${breakpointsMedia({
    xs: css`
      /* All devices */
      ${TextStyleVariants.smallestException}
    `,
    md: css`
      /* From md breakpoint */
      ${TextStyleVariants.paragraph1}
    `,
  })}

  &:disabled {
    cursor: not-allowed;
    opacity: .2;
  }

  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
