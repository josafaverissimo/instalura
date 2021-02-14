import { css } from 'styled-components';
import { breakpoints } from '../index';

export function breakpointsMedia(cssByBreakPoints) {
  const breakpointsNames = Object.keys(cssByBreakPoints);

  return breakpointsNames.map((breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakPoints[breakpointName]}
      }
    `);
}
