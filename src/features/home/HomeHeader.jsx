import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import NavBar from '../../ui/Navbar'
import Logo from '../../ui/Logo'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  background-color: transparent;
  z-index: 5000;
`
const StyledSocial = styled.div`
  padding-right: 10rem;
  height: 3.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
const StyledLink = styled(NavLink)`
  margin-right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Img = styled.img`
  height: 2.5rem;
  width: 2.5rem;
  z-index: 10000;
`
function Header() {
  return (
    <StyledHeader>
      <Logo img="../../../mloogo.png" type="big" />
      <StyledSocial>
        <StyledLink>
          <Img src="../../facebook.png" />
        </StyledLink>
        <StyledLink>
          <Img src="../../instagram.png" />
        </StyledLink>
        <StyledLink>
          <Img src="../../twitter.png" />
        </StyledLink>
        <StyledLink>
          <Img src="../../youtube.png" />
        </StyledLink>
      </StyledSocial>
      <NavBar />
    </StyledHeader>
  )
}

export default Header
