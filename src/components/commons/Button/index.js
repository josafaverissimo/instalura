import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariants } from '../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { propToStyle } from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
  color: ${({ variant, theme }) => get(theme, `colors.modes[${theme.colors.currentMode}].${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${({ variant, theme }) => get(theme, `colors.modes[${theme.colors.currentMode}].${variant}.contrastText`)};
  background-color: ${({ variant, theme }) => get(theme, `colors.modes[${theme.colors.currentMode}].${variant}.color`)};
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
  &:hover,
  &:focus {
    opacity: .5;
  }

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

  ${propToStyle('margin')}
  ${propToStyle('display')}
`;
