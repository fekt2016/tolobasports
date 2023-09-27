import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const Input = styled.input`
  border: 1px solid var(--color-gray-300);
  background-color: var(--color-gray-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  ${(props) =>
    props.dist === 'col' &&
    css`
      width: 48%;
      @media ${devicesMax.md} {
        width: 90%;
      }
    `}
`
export default Input
