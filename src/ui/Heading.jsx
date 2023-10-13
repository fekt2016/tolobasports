import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Heading = styled.h1`

font-family: 'Lato';

color: var(--color-primary-200);
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 5rem;
      font-weight: 600;
      font-family: 'Roboto';
    `}
  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 3.2rem;
      font-weight: 600;
    `}
    ${(props) =>
      props.as === 'h3' &&
      css`
        font-size: 2rem;
        font-weight: 500;
      `}
      ${(props) =>
        props.as === 'h4' &&
        css`
          font-size: 4rem;
          font-weight: 600;
          text-align: center;
        `}
        @media ${devicesMax.md} {
    font-size: 1.8rem
  }
`
export default Heading
