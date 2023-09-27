import styled from 'styled-components'

const ButtonIcon = styled.button`
  background: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-primary-0);
  }
`

export default ButtonIcon
