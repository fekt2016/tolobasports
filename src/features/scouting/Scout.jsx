import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Row from '../../ui/Row'
import Section from '../../ui/Section'
import UnderLine from '../../ui/UnderLine'
import Button from '../../ui/Button'
import { devicesMax } from '../../styles/BreakPoint'
import YoutubeEmbed from '../../ui/YoutubeEmbed'

const ScoutContent = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  padding: 0 8rem;

  @media ${devicesMax.md} {
    flex-direction: column;
    padding: 0 2rem;
  }
`
const ScoutDetail = styled.div`
  flex: 1;
  height: 100%;
`
const ScoutText = styled.div`
  flex: 1;
  border: 1px solid var(--color-primary-0);
  border-top: 5px solid var(--color-black-900);
  padding: 4rem;
  color: var(--color-grey-500);

  @media ${devicesMax.md} {
    padding: 1.5rem;
  }
`
const Img = styled.img`
  width: 100%;
  height: 310px;
`
const StyledP = styled.p`
  width: 100%;
  font-size: 1.5rem;
  text-align: justify;

  @media ${devicesMax.dm} {
    font-size: 1.2rem;
  }
`

const StyledCheck = styled.div`
  padding: 4rem;
  background-image: url('../../../pc37.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media ${devicesMax.md} {
    margin-bottom: 4rem;
    padding: 2rem;
  }
`
const H4 = styled.h4`
  color: var(--color-white-900);
  font-size: 2rem;
`
const VideoContent = styled.div`
  padding: 4rem;
  height: 40rem;

  display: flex;
  justify-content: space-evenly;
  gap: 20px;
  align-items: center;

  @media ${devicesMax.md} {
    flex-direction: column;
    padding: 2rem;
  }
`
function Scout() {
  return (
    <>
      <Section>
        <Row>
          <Heading as="h2">Scouting</Heading>
          <UnderLine />
        </Row>
        <ScoutContent>
          <ScoutDetail>
            <Img src="../../../pc30.jpg" alt="pc30" />
          </ScoutDetail>
          <ScoutText>
            <StyledP>
              Our scouting process happens once a year by UEFA Certified coaches
              at our football academies. Shortlisted students will be given an
              opportunity to be trained and mentored at our European centres of
              expertise for a short-term program in FC Metz, France or Deutsches
              Fussball Internat (DFI), Germany. Selected students from this
              short-term program will then have an opportunity to be mentored at
              FC Metz, France or Deutsches Fussball Internat (DFI), Germany for
              a long-term program. Those who have not qualified for our
              short-term or long-term programs will be trained at our academies
              and will get an opportunity to get scouted for our next season.
            </StyledP>
          </ScoutText>
        </ScoutContent>
      </Section>
      <StyledCheck>
        <H4>CHECK SCOUTING SCHEDULE AND OTHER IMPORTANT ANNOUNCEMENTS</H4>
        <Button>CLICK HERE</Button>
      </StyledCheck>
      <Section>
        <Row>
          <Heading as="h2">THE RISING STARS</Heading>
          <UnderLine />
        </Row>
        <VideoContent>
          <YoutubeEmbed embedId="c6VYQ90Dgd0" />
          <YoutubeEmbed embedId="Ph5JpIFKVoE" />
        </VideoContent>
      </Section>
    </>
  )
}

export default Scout
