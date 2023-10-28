import styled from 'styled-components'
import Heading from '../../ui/Heading'
import Underline from '../../ui/UnderLine'
import YoutubeEmbed from '../../ui/YoutubeEmbed'
import { devicesMax } from '../../styles/BreakPoint'

const StyledArticle = styled.div`
  padding: 4rem;
`
const StyledNews = styled.div`
  padding: 2rem;
`
const StyledVideo = styled.div`
  width: 50%;
  margin: 0 auto;
  height: 25rem;

  @media ${devicesMax.md} {
    width: 95%;
  }
`
const StyledP = styled.p`
  hyphens: none;
  text-align: center;
`

function NewsArticle() {
  return (
    <StyledArticle>
      <Heading as="h4">
        Ghanaian Entrepreneur Musah Toloba Recognized for Sports Initiatives and
        Receives Collaboration Offer from Turcaf President
      </Heading>
      <Underline />
      <StyledNews>
        <StyledP>
          Ghanaian Entrepreneur Musah Toloba Recognized for Sports Initiatives
          and Receives Collaboration Offer from Turcaf President In a
          significant development, Mr. Musah Toloba, the Founder and CEO of the
          rapidly growing Ghanaian-owned enterprise, Toloba Sports Consult, has
          received commendation and a collaboration proposal from Mr. Mohammet
          Ali Aras, the President of Turcaf, a prominent company. Mr. Muhammet
          Ali Aras lauded Mr. Toloba for his remarkable initiatives in the
          sports industry, particularly for his efforts in identifying and
          nurturing talents with the aim of helping aspiring athletes achieve
          their dreams of becoming professional footballers. This recognition
          underlines the importance of Mr. Toloba&apos;s work and the positive
          impact it&apos;s making in the sports community. One of the notable
          aspects of Toloba Sports Consult&apos;s multifaceted approach to
          sports development is its involvement in the construction of Astro
          Turfs, state-of-the-art synthetic playing fields that offer a
          high-quality surface for various sports. These Astro Turfs have not
          only provided local communities with access to world-class sports
          facilities but have also created opportunities for young talents to
          hone their skills and compete on top-notch grounds. Over the years,
          Toloba Sports Consult has gained a reputation for its dedication to
          unearthing hidden talents, creating pathways for young athletes to
          develop their skills, and providing them with opportunities to compete
          at a professional level. Musah Toloba&apos;s unwavering commitment to
          the growth and development of sports in Ghana has garnered both
          national and international attention. In response to the praise and
          collaboration offer from Mr. Ali Aras, Mr. Musah Toloba expressed his
          deep gratitude and acknowledged the significance of this visit. He
          assured Mr. Ali Aras that he is committed to making this collaboration
          count. The meeting represents a potential milestone in the sports
          industry, with the promise of combining the strengths and resources of
          both companies to further promote sports and provide even more
          opportunities for talented athletes. The collaboration between Toloba
          Sports Consult and Turcaf holds the potential to bring about exciting
          developments, not only within the Ghanaian sports landscape but also
          on a broader scale. This partnership signals a bright future for
          aspiring athletes and underscores the power of collaboration in
          achieving common goals within the sports fraternity. It&apos;s a story
          worth following as it unfolds, with expectations of positive and
          transformative impacts on the world of sports.
        </StyledP>
      </StyledNews>
      <StyledVideo>
        <YoutubeEmbed embedId="R4WnMNK6zQ0" />
      </StyledVideo>
    </StyledArticle>
  )
}

export default NewsArticle
