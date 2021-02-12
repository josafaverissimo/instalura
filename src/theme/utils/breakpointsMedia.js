import { breakpoints } from '../index'
import { css } from 'styled-components';

export function breakpointsMedia(cssByBreakPoints) {
    const breakpointsNames = Object.keys(cssByBreakPoints)
    
    return breakpointsNames.map((breakpointName) => css`
      @media screen and (min-width: ${breakpoints[breakpointName]}px) {
        ${cssByBreakPoints[breakpointName]}
      }
    `)
  }