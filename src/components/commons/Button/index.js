import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from "../../foundation/Text";

const ButtonGhost = css`
  color: ${({ variant, theme }) => get(theme, `colors.${variant}.color`)};
  background: transparent;
`;

const ButtonDefault = css`
  color: ${({ variant, theme }) => get(theme, `colors.${variant}.contrastText`)};
  background-color: ${({ variant, theme }) => get(theme, `colors.${variant}.color`)};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${TextStyleVariantsMap.smallestException}

  ${(props) => {
    return props.ghost ? ButtonGhost : ButtonDefault
  }}
  &:hover,
  &:focus {
    opacity: .5;
  }
`;