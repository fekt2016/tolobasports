import Section from '../../ui/Section'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import UnderLine from '../../ui/UnderLine'
import Img from '../../ui/Img'
import styled, { css, keyframes } from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'

const StyledPart = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  background-color: aliceblue;

  @media ${devicesMax.lg} {
    flex-direction: column;
  }
  @media ${devicesMax.md} {
    padding: 2rem;
  }
`
const ContentBox = styled.div`
  flex-basis: 48%;
  ${(props) =>
    props.type === 'border' &&
    css`
      border: 1px solid var(--color-primary-0);
      border-top: 5px solid var(--color-black-900);
      padding: 1rem;
    `}
`
const TextBox = styled.div`
  background-color: transparent;
  width: 70%;
  margin: 0 auto;

  @media ${devicesMax.dm} {
    width: 100%;
  }
`

const StyledList = styled.ul``
const StyledItem = styled.li`
  color: var(--color-white-900);
  padding: 1rem;
  border: 1px solid var(--color-grey-300);
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
  @media ${devicesMax.dm} {
    font-size: 1.2rem;
  }
`
const PartnerTran = keyframes`
0%{
transform: translateX(0);
}
100%{
  transform: translateX(calc(-350px * 4));
}
`

const StyledTran = styled.div`
  width: 200%;
  height: 25rem;
  margin: 0 auto;
  display: flex;

  animation: ${PartnerTran} 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`
const ImgList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const ImgItem = styled.li`
  height: 15rem;
  width: 350px;
`
const ImgScroll = styled.img`
  width: 200px;
  height: 15rem;
`
const P = styled.p`
  @media ${devicesMax.dm} {
    font-size: 1.2rem;
  }
`

function PartContent() {
  return (
    <>
      <Section>
        <Row>
          <Heading as="h2">Partner with us</Heading>
          <UnderLine />
        </Row>
        <StyledPart>
          <ContentBox>
            <Img src="../../../pc31.jpg" alt="pc31" />
          </ContentBox>
          <ContentBox type="border">
            <P>
              Eric Benny Sports Management (EBSM) is in the business of
              Consulting, Scouting and Mentoring of potential footballers so as
              to create an educated race of footballers and/or careers around
              football. We are building the biggest football academy Partner
              Network and welcome individuals, proprietors and organizations who
              have a prior experience in corporate environment and passion
              towards sports to join us in our vision.
            </P>
          </ContentBox>
        </StyledPart>
      </Section>
      <Section type="part">
        <Row>
          <Heading as="h2">WHY PARTNER WITH US</Heading>
          <UnderLine cols="col" />
        </Row>
        <TextBox>
          <StyledList>
            <StyledItem>
              Eric Benny Sports Management is in a strategic partnership with
              premium European football centres of expertise Deutsches Fußball
              Internat (DFI) Germany and FC Metz France
            </StyledItem>
            <StyledItem>
              We invite partners from all over the country to identify and
              recruit the best football mentors and coaches and guide them to
              run Eric Benny Football Academies as per the guidelines of EBSM
            </StyledItem>
            <StyledItem>
              Our regional partners can market and sell learning & development
              products of Eric Benny Sports Management
            </StyledItem>
            <StyledItem>
              An opportunity to provide a pathway for Indian Footballers to get
              mentored and trained by our UEFA certified coaches. EBSM regional
              partners can also scout for budding footballers from Eric Benny
              Football Academies and other sources, to get mentored by our
              European football centres of expertise Deutsches Fußball Internat
              (DFI) Germany and FC Metz (France)
            </StyledItem>
            <StyledItem>
              Through Eric Benny Football Academies, regional partners can
              provide an opportunity for young footballers to get coaching at
              both grass - root level and at the professional level.
            </StyledItem>
          </StyledList>
        </TextBox>
      </Section>
      <Section type="parts">
        <StyledTran>
          <ImgList>
            <ImgItem>
              <ImgScroll src="../../../com1.png" alt="com1" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="../../../com2.jpeg" alt="com1" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="../../../com3.jpeg" alt="com1" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="../../../com4.png" alt="com1" />
            </ImgItem>
          </ImgList>
          <ImgList>
            <ImgItem>
              <ImgScroll src="../../../com1.png" alt="com1" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="../../../com2.jpeg" alt="com1" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="../../../com3.jpeg" alt="com1" />
            </ImgItem>
            <ImgItem>
              <ImgScroll src="../../../com4.png" alt="com1" />
            </ImgItem>
          </ImgList>
        </StyledTran>
      </Section>
    </>
  )
}

export default PartContent
