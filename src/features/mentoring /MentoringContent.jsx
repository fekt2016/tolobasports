import styled from 'styled-components'
import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import Underline from '../../ui/UnderLine'
import GetMentored from './GetMentored'
import { devicesMax } from '../../styles/BreakPoint'

const StyledContent = styled.div`
  padding: 4rem;

  display: flex;
  gap: 20px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const StyledText = styled.div`
  padding: 2rem;
  flex: 1;

  border: 1px solid var(--color-primary-0);
  border-top: 5px solid var(--color-black-900);
`
const P = styled.p`
  text-align: justify;
`
const ImgBox = styled.div`
  height: 300px;
  flex: 1;
`
const Img = styled.img`
  width: 100%;
  height: 100%;
`

function MentoringContent() {
  return (
    <>
      <Header images="mentor" />
      <Section>
        <Row>
          <Heading as="h2">MENTORING</Heading>
          <Underline />
        </Row>
        <StyledContent>
          <StyledText>
            <P>
              The right mentoring programs have been known to help young
              student-athletes’ mature at both mental as well as physical level.
              This maturity certainly changes the way the student-athletes’
              approach their work, their attitude and mannerisms they adopt to
              in their life. We at Eric Benny Sports Management (EBSM) assure
              that student-athletes’ not only learn the best football practices
              but will also learn what it takes to be the best in the crowd. We
              mentor every student-athlete enrolled with us to work towards
              their unique goals with their strengths and help them eliminate
              their areas of weaknesses.
            </P>
          </StyledText>
          <ImgBox>
            <Img src="../../../pc15.jpg" alt="pc15" />
          </ImgBox>
        </StyledContent>

        <StyledContent>
          <ImgBox>
            <Img src="../../../pc16.jpg" alt="pc16" />
          </ImgBox>
          <StyledText>
            <P>
              Our mentoring programs help coaches as well and offer them an
              opportunity to work as a mentor to the student-athletes’ football
              journey. As a mentor, they can inspire the student–athlete to be a
              great sports person as well as a responsible member of the
              community. Together we work towards achieving your goals and help
              you reach your supreme potential!
            </P>
          </StyledText>
        </StyledContent>
      </Section>
      <Section>
        <Row>
          <Heading>PLAYERS MENTORING BY ERIC BENNY SPORTS MANAGEMENT</Heading>
          <Underline />

          <div>SLIDER</div>
        </Row>
      </Section>
      <Section>
        <Row>
          <Heading>GET MONTORED</Heading>
          <Underline />
        </Row>
        <GetMentored />
      </Section>
    </>
  )
}

export default MentoringContent
