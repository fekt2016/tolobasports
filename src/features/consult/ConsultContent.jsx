import Header from '../../ui/Header'
import Heading from '../../ui/Heading'
import Section from '../../ui/Section'
import Row from '../../ui/Row'
import Underline from '../../ui/UnderLine'
import styled from 'styled-components'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { devicesMax } from '../../styles/BreakPoint'

const ContentDetail = styled.div`
  padding: 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
`
const TextDetail = styled.div`
  border: 1px solid var(--color-primary-0);
  border-top: 5px solid var(--color-black-900);
  padding: 2rem;
  flex: 1;
`
const VideoContent = styled.div`
  flex: 1;
  height: 34.4rem;
  @media ${devicesMax.md} {
    width: 90%;
  }
`
const P = styled.p`
  font-size: 1.6rem;

  @media ${devicesMax.sm} {
    font-size: 1.2rem;
  }
`

function ConsultContent() {
  return (
    <>
      <Header images="mentor"></Header>
      <Section>
        <Row>
          <Heading as="h2">CONSULT WITH US</Heading>
          <Underline />
        </Row>
        <ContentDetail>
          <VideoContent>
            <YoutubeEmbed embedId="c6VYQ90Dgd0" />
          </VideoContent>
          <TextDetail>
            <P>
              Eric Benny Sports Management (EBSM) provides a professional and
              inclusive football consultancy service customized to
              student-athletes across continents of Europe, Asia, Australia and
              North & South America. We offer the best football education,
              knowledge and global reach & exposure to student-athletes’ and
              coaches Our consultants help analyse the student-athletes’
              football performance and guide them to play with their strengths.
              We help find best possible solution for a
              student-athlete’s/coach’s football needs and aspirations.
              Consulting Areas: Individual players/student-athlete, Schools,
              Universities, Football Associations, Club Representation, Scouting
              Activities, and Player Investments.
            </P>
          </TextDetail>
        </ContentDetail>
      </Section>
    </>
  )
}

export default ConsultContent
