import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const StyledWel = styled.div`
  color: var(--color-white-900);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.9) 90%
    ),
    url('../../../images/pc60.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const StyledBox = styled.div`
  width: 60%;
  @media ${devicesMax.md} {
    width: 90%;
  }
  padding-left: 10rem;
`
const StyledP = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media ${devicesMax.md} {
    font-size: 2rem;
  }
`
function Welcome() {
  return (
    <StyledWel>
      <StyledBox>
        <Heading as="h1">Toloba Sport consult</Heading>
        <StyledP>
          We prioritize Fostering talent, enhancing skills, and nurturing
          athletes to reach their full potential in the world of sports
        </StyledP>
      </StyledBox>
    </StyledWel>
  )
}

export default Welcome
