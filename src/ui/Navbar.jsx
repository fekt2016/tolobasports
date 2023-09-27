import {
  HiOutlineAtSymbol,
  HiOutlineBars3BottomRight,
  HiOutlineBuildingLibrary,
} from 'react-icons/hi2'
import styled from 'styled-components'

import { NavLink } from 'react-router-dom'
import Sidebar from './sidebar'
import { useState } from 'react'
import { devicesMax } from '../styles/BreakPoint'

const StyledNav = styled.nav`
  background-color: var(--color-primary-0);
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const StyledUl = styled.ul`
  display: flex;
  padding-right: 15rem;

  @media ${devicesMax.md} {
    padding-right: 10rem;
  }
  @media ${devicesMax.sm} {
    padding-right: 6rem;
  }
`
const StyledLi = styled.li`
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-right: 1px solid var(--color-black-900);

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.3s;
  }

  &:hover {
    background-color: var(--color-black-900);
    color: var(--color-white-900);
  }

  &:nth-child(1) {
    border-left: 1px solid var(--color-black-900);
  }
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Sidebar type={isOpen ? 'open' : ''} setIsOpen={setIsOpen} />
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to="/">
              <HiOutlineBuildingLibrary />
              Home
            </StyledNavLink>
          </StyledLi>

          <StyledLi>
            <StyledNavLink to="/contact">
              <HiOutlineAtSymbol />
              Contact
            </StyledNavLink>
          </StyledLi>
          <StyledLi onClick={() => setIsOpen(true)}>
            <HiOutlineBars3BottomRight />
            Menu
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </>
  )
}

export default NavBar
