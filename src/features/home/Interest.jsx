import styled, { css } from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'
import { NavLink } from 'react-router-dom'
import Button from '../../ui/Button'
import Underline from '../../ui/UnderLine'

const Container = styled.div`
  padding: 4rem;

  @media ${devicesMax.md} {
    padding: 3rem;
  }
  @media ${devicesMax.sm} {
    padding: 1rem;
  }
`

const StyledHeader = styled.div`
  padding-bottom: 4rem;
`

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  color: var(--color-primary-0);
  @media ${devicesMax.md} {
    font-size: 2.5rem;
  }
  @media ${devicesMax.sm} {
    font-size: 2rem;
  }
`
const StyledBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

const StyledCard = styled.figure`
  height: 30rem;


  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    background-size: 110%;
    backdrop-filter: 100%;
    border: 2px solid var(--color-primary-0);
    filter: 100%;
  }
  &:hover H2 {
    bottom: 50px;
  }
  &:hover Button {
    bottom: 10px;
  }
  @media ${devicesMax.sm} {
    background-size: 100% 100%;
  }
  ${(props) =>
    props.pics === 'aboutus' &&
    css`
      background-image: url('../../../pc3.jpg');
    `}
  ${(props) =>
    props.pics === 'residential' &&
    css`
      background-image: url('../../../pc5.jpg');
    `}
  ${(props) =>
    props.pics === 'euro' &&
    css`
      background-image: url('../../../pic1.jpeg');
    `}
  ${(props) =>
    props.pics === 'coach' &&
    css`
      background-image: url('../../../pc4.jpg');
    `}

`

const StyledBox = styled.div`
  width: 50%;
  height: 100%;

  position: relative;
  @media ${devicesMax.md} {
    width: 90%;
  }
`

const H2 = styled.h2`
  font-size: 1.6rem;
  color: var(--color-white-900);
  position: absolute;
  bottom: 1px;
  left: 5px;
  transition: all 0.3s;
  @media ${devicesMax.md} {
  }
`

function Interest() {
  return (
    <Container>
      <StyledHeader>
        <Heading as="h2">CHOOSE YOUR INTEREST</Heading>
        <Underline />
      </StyledHeader>
      <StyledBody>
        <StyledCard pics="aboutus">
          <StyledBox>
            <H2>About MTLO</H2>
            <Button pros="interest">
              <NavLink to="/aboutus">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
        <StyledCard pics="residential">
          <StyledBox>
            <H2>RESIDENTIAL FOOTBALL SCHOOL</H2>
            <Button pros="interest">
              <NavLink to="/consult">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
        <StyledCard pics="euro">
          <StyledBox>
            <H2>EUROPEAN PROGRAMMES</H2>
            <Button pros="interest">
              <NavLink to="/programmes">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
        <StyledCard pics="coach">
          <StyledBox>
            <H2>COACH EDUCATION</H2>
            <Button pros="interest">
              <NavLink to="/trainer">VIEW MORE</NavLink>
            </Button>
          </StyledBox>
        </StyledCard>
      </StyledBody>
    </Container>
  )
}

export default Interest
