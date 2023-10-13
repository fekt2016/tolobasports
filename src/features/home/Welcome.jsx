import styled from 'styled-components'
import Heading from '../../ui/Heading'
import { devicesMax } from '../../styles/BreakPoint'

const StyledWel = styled.div`
  color: var(--color-white-900);
  width: 100vw;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0), rgba(0, 0, 0, 0.7)),
    url('../../../pc10.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;

  @media ${devicesMax.lg} {
    flex-direction: column;
  }
`
const StyledBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
`
const StyledP = styled.p`
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  @media ${devicesMax.lg} {
    font-size: 2.5rem;
  }
  @media ${devicesMax.md} {
    font-size: 2rem;
  }
`
const ImgBox = styled.div`
  /* /* height: 100%; */
  /* position: relative; */
  /* flex: 1;
  align-self: self-end;
  background-color: blue;
  padding: 1rem;  */
`
const Img = styled.img`
  height: 40rem;
  width: 60rem;
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
      <ImgBox>
        <Img src="../../../1 NEW.png" alt="tolo" />
      </ImgBox>
    </StyledWel>
  )
}

export default Welcome
