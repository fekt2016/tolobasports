import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import Underline from '../../ui/UnderLine'
import Button from '../../ui/Button'
import { devicesMax } from '../../styles/BreakPoint'
import { NavLink } from 'react-router-dom'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import Img from '../../ui/Img'

const AboutContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 80rem;
  padding: 3rem;

  @media ${devicesMax.xl} {
    height: 84rem;
  }
  @media ${devicesMax.lg} {
    height: 88%;
  }
  @media ${devicesMax.md} {
    padding: 2rem;
  }
  @media ${devicesMax.sm} {
    padding: 1rem;
  }
`
const ImgBox = styled.div`
  display: flex;
  justify-content: space-around;

  @media ${devicesMax.lg} {
    margin-bottom: 2rem;
  }
  @media ${devicesMax.md} {
    margin-bottom: 1rem;
    flex-direction: column;
  }
`
const VideoContent = styled.div`
  width: 100%;

  padding: 4rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${devicesMax.md} {
    flex-direction: column;
    gap: 20px;
  }
`
const Image = styled.div`
  flex-basis: 40%;
  border: 2px solid var(--color-primary-0);
  height: 25rem;

  @media ${devicesMax.md} {
    width: 100%;
    height: 40rem;
  }
`
// const Img = styled.img`
//   height: 100%;
//   width: 100%;
// `

const ContentDetail = styled.div`
  width: 65%;
  margin: 0 auto;
  position: relative;

  height: 100%;

  @media ${devicesMax.lg} {
    width: 100%;
  }
`
const Detail = styled.div`
  border: 1px solid var(--color-grey-400);
  border-top: 5px solid var(--color-primary-0);
  width: 100%;
  background-color: var(--color-white-900);
  margin: 0 auto;
  position: absolute;
  top: -50px;
  padding: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${devicesMax.lg} {
    position: relative;
  }
  @media ${devicesMax.md} {
    top: 0;
    padding: 4rem;
  }
  @media ${devicesMax.sm} {
    padding: 2rem;
  }
`
const H6 = styled.h6`
  margin-bottom: 2rem;
  font-size: 1.6rem;
  text-align: center;

  @media ${devicesMax.md} {
    font-size: 1.4rem;
  }
  @media ${devicesMax.sm} {
    font-size: 1.2rem;
  }
`

const Team = styled.div`
  width: 80%;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;

  gap: 20px;
  padding: 2rem;

  @media ${devicesMax.lg} {
    gap: 10px;
  }
  @media ${devicesMax.md} {
    grid-template-columns: repeat(2, 24rem);
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`
const StyledPer = styled.div`
  height: 20rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin: 0 auto;
`
const CareerDetail = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 4rem;
  border: 1px solid var(--color-primary-0);
  border-top: 5px solid var(--color-black-900);
  color: var(--color-grey-700);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledP = styled.p`
  text-align: center;
  font-size: 1.6rem;

  @media ${devicesMax.md} {
    font-size: 1.2rem;
  }
`
const CareerP = styled.p`
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1rem;

  @media ${devicesMax.md} {
    font-size: 1.1rem;
  }
`
const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledSpan = styled.span`
  text-transform: capitalize;
`
function AboutDetail() {
  return (
    <>
      <Section type="about">
        <Row>
          <Heading as="h2">About Us</Heading>
          <Underline />
        </Row>
        <AboutContent>
          <ImgBox>
            <Image>
              <Img src="../../../2.png" alt="pc8" />
            </Image>
            <Image>
              <Img src="../../../musah4.jpeg" />
            </Image>
          </ImgBox>
          <ContentDetail>
            <Detail>
              <H6>About TOLOBA SC</H6>

              <StyledP>
                <strong>Toloba Sports Consult Limited</strong>, established in
                2018 by Musah Toloba, represents the embodiment of a vision
                fueled by passion. Musah Toloba, a dynamic young Ghanaian, has
                dedicated himself to uncovering the latent football talent that
                often goes unnoticed. His mission is driven by the belief that
                within the hearts of young athletes lie the dreams of becoming
                professional footballers.
              </StyledP>
              <StyledP>
                <strong>Our Belief:</strong> At the heart of our endeavor lies
                an unshakable belief in the art of scouting and the profound
                impact of adept player management. We recognize that nurturing
                raw talent is more than just a process; it&apos;s a journey.
                It&apos;s about identifying potential, providing the right
                guidance, and instilling the discipline and skills necessary to
                transform young athletes into professionals.
              </StyledP>
              <StyledP>
                <strong>Our Mission:</strong> At Toloba Sports Consult Limited,
                our mission is clear and unwavering - to serve as a catalyst,
                igniting transformative shifts within the realm of football
                education. We strive to create an environment where raw
                potential flourishes into professional excellence. Our mission
                extends beyond just nurturing talent; it&apos;s about instilling
                values, dedication, and the resilience needed for success.
              </StyledP>
            </Detail>
          </ContentDetail>
        </AboutContent>
        <VideoContent>
          <Image>
            <YoutubeEmbed embedId="R4WnMNK6zQ0" />
          </Image>
          <Image>
            <YoutubeEmbed embedId="R4WnMNK6zQ0" />
          </Image>
        </VideoContent>
      </Section>
      <Section>
        <Row>
          <Heading as="h2">OUR TEAM</Heading>
          <Underline />
        </Row>
        <Team>
          <StyledBox>
            <StyledPer>
              <Img src="../../../staff1.jpeg" alt="pc17" />
            </StyledPer>
            <StyledSpan>Mr. Abibu Mohammed </StyledSpan>
            <StyledSpan>international</StyledSpan>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="../../../staff2.jpeg" alt="pc18" />
            </StyledPer>
            <StyledSpan>Mr. Abibu Mohammed </StyledSpan>
            <StyledSpan>international</StyledSpan>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="../../../staff3.jpeg" alt="pc22" />
            </StyledPer>
            <StyledSpan>Mr. Abibu Mohammed </StyledSpan>
            <StyledSpan>international</StyledSpan>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="../../../staff4.jpeg" alt="pc21" />
            </StyledPer>
            <StyledSpan>Mr. Abibu Mohammed </StyledSpan>
            <StyledSpan>international</StyledSpan>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="../../../staff4.jpeg" alt="pc21" />
            </StyledPer>
            <StyledSpan>Mr. Abibu Mohammed </StyledSpan>
            <StyledSpan>international</StyledSpan>
          </StyledBox>
          <StyledBox>
            <StyledPer>
              <Img src="../../../staff4.jpeg" alt="pc21" />
            </StyledPer>
            <StyledSpan>Mr. Abibu Mohammed </StyledSpan>
            <StyledSpan>international</StyledSpan>
          </StyledBox>
        </Team>
      </Section>
      <Section>
        <Row>
          <Heading as="h2">CAREER</Heading>
          <Underline />
        </Row>
        <CareerDetail>
          <Row>
            <Heading as="h2">JOIN TOLOBA SPORTS MANAGEMENT</Heading>
          </Row>
          <CareerP>
            The measure of our success is reflected in the achievements of the
            players we have nurtured. These young talents, once hidden gems,
            have not only represented Ghana&apos;s junior national teams but
            have also achieved the extraordinary by securing coveted contracts
            with esteemed European clubs. Their journeys inspire us and stand as
            testaments to our commitment to nurturing the stars of tomorrow
          </CareerP>
          <CareerP>
            We are looking for Partners, Sales and Marketing Staff, Coaches
            across the country. If interested, kindly send us an email at
          </CareerP>
          <CareerP>Mtoloba@yahoo.com</CareerP>
          <NavLink to="/contact">
            <Button>CONTACT US</Button>
          </NavLink>
        </CareerDetail>
      </Section>
    </>
  )
}

export default AboutDetail
