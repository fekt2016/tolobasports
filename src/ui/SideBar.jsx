/* eslint react/prop-types: 0 */
import styled, { css } from 'styled-components'
import { HiXMark } from 'react-icons/hi2'
import ButtonIcon from '../ui/ButtonIcon'
import { NavLink } from 'react-router-dom'
import Modal from '../ui/Modal'
import NewsLetter from '../features/newsletter/NewsLetter'

const StyledSideBar = styled.div`
  background-color: var(--color-primary-0);
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 500;
  width: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  ${(props) =>
    props.type === 'open' &&
    css`
      opacity: 1;
      visibility: visible;
      width: 25rem;
    `}
`
const StyledNav = styled.nav`
  flex: 1;
`
const BtnIcon = styled.li`
  padding: 1rem 2rem;
  list-style: none;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const MenuList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 2rem;
`
function Sidebar({ setIsOpen, type }) {
  return (
    <StyledSideBar type={type}>
      <BtnIcon>
        <ButtonIcon onClick={() => setIsOpen(false)}>
          <HiXMark />
        </ButtonIcon>
      </BtnIcon>
      <StyledNav>
        <MenuList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/aboutus">About Toloba SC</NavLink>
          <NavLink to="/scouting">Scouting</NavLink>
          <NavLink to="/mentoring">Mentoring</NavLink>
          <NavLink to="/consult">Consulting</NavLink>
          <NavLink to="partners">Partners</NavLink>
          <NavLink to="/image-gallery">Gallery</NavLink>
          <NavLink to="/testimonial">Testimonials</NavLink>
          <NavLink to="/blog">Media & Blog</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <Modal>
            <Modal.Open opens="newsletter">
              <NavLink>Newsletter</NavLink>
            </Modal.Open>
            <Modal.Window name="newsletter">
              <NewsLetter />
            </Modal.Window>
          </Modal>
          <NavLink to="/contact">Contact Us</NavLink>
        </MenuList>
      </StyledNav>
    </StyledSideBar>
  )
}

export default Sidebar
