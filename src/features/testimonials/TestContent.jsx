import Section from '../../ui/Section'
import Header from '../../ui/Header'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import UnderLine from '../../ui/UnderLine'
import styled from 'styled-components'

const StyledTest = styled.div`
  background-color: var(--color-white-900);
  position: absolute;
  bottom: 100px;
  right: 50px;
  font-size: 50px;
  padding: 5rem;
  color: var(--color-primary-0);
  box-shadow: var(--shadow-lg);
`
const TestDetail = styled.div`
  display: flex;
  margin-bottom: 4rem;
`

const ImgBox = styled.div`
  border: 2px solid var(--color-primary-0);
  height: 50rem;
  flex: 1;
  padding: 3rem;
  z-index: -2;
`
const TextBox = styled.div`
  flex: 4;
  height: 50rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`
const TextBoxDetail = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  padding: 2rem;
  /* margin-right: 20rem; */
  z-index: -1;

  left: -60px;
  background-color: var(--color-white-900);
`
const P = styled.p`
  margin-bottom: 2rem;
  z-index: -1;
`
function TestContent() {
  return (
    <>
      <Header images="test">
        <StyledTest>TESTIMONIALS</StyledTest>
      </Header>
      <Section type="padd">
        <Row>
          <Heading as="h2">TESTIMONIALS</Heading>
          <UnderLine />
        </Row>

        <TestDetail>
          <ImgBox>
            <img src="../../../test-1.jpeg" />
          </ImgBox>
          <TextBox>
            <TextBoxDetail>
              <P>
                Indian Football is still in its Developing phase and footballers
                from small cities have to struggle hard to be noticed. After
                being a part of the AIFF elite academy, nothing was planned or
                certain. During this period I got an opportunity to go to FC
                Metz thanks to Mr. Eric Benny. Playing at the Ligue 1 club in
                France was a dream come true. A budding football player
                couldn&apos;t have asked for a better platform to prove himself
                at that point in his career. Working with Mr. Eric Benny was a
                great pleasure. His helpful and polite attitude goes on to show
                that he is in this business to promote talent and he will go out
                of his way for doing that. His experience and track record shows
                his contribution to the games welfare. I am sure there are
                hundreds who would want to thank him and I would like take this
                opportunity to express my gratitude on behalf of all such
                players who got the opportunity to work with him. I wish him the
                very best for the future and hope he continuous to do good work
                for a long time so that budding players like me get the
                opportunity to work with such and experienced and knowledgeable
                person like him. I sure look forward to work with him again in
                the future.
              </P>
              <h3>Anirudh Thapa</h3>
              <span>Chennaiyin FC And Indian National Team</span>
            </TextBoxDetail>
          </TextBox>
        </TestDetail>
        <TestDetail>
          <ImgBox>
            <img src="../../../test-2.jpeg" />
          </ImgBox>
          <TextBox>
            <TextBoxDetail>
              <P>
                EBSM is providing a fantastic infrastructure and coaches in
                Germany. The environment in which my boy is getting trained is
                heaven on earth. Highlight of the training is individual
                attention given at DFI. My boy went at the age of 12, I was
                really worried initially how my son will adapt to a different
                world which he never experienced before. When I called Nikhil
                during his trail stint in Germany he mentioned that he misses
                the family and Indian food. However, he expressed that these
                sacrifices are worth every bit as what he is getting in return
                is wonderful, in terms of training quality, football pitches,
                tournaments, quality of food, accommodation and more. He said:
                “I love to learn football in Germany.” Nikhil said Eric looks
                after him very well. I need to thank Eric for making him feel
                good, though he his 7000 miles away from us, and once again
                thanks for giving such fantastic atmosphere. The biggest
                surprise I had, when Eric called me to Germany, this feeling
                can&apos;t be expressed, this needs to be experienced. Wow!!!
                What an infrastructure in Germany, in India even big clubs
                don&apos;t have it. I never expected or thought that I would be
                able to provide my son with this level of that high standard of
                infrastructure & training. I would say Nikhil is blessed to have
                it, and I need to thank Eric for providing him with this
                wonderful lifetime opportunity. It&apos;s not just about
                football, the education system in Germany is second to none in
                the world. I am very sure in coming years Eric is going to make
                India proud for his great work. Eric & team, keep up your good
                work. I am confident one day my son will make us all proud.
              </P>
              <h3>Balachander Dharmalingam</h3>
            </TextBoxDetail>
          </TextBox>
        </TestDetail>
        <TestDetail>
          <ImgBox>
            <img src="../../../test-3.jpeg" />
          </ImgBox>
          <TextBox>
            <TextBoxDetail>
              <P>
                Indian Football is still in its Developing phase and footballers
                from small cities have to struggle hard to be noticed. After
                being a part of the AIFF elite academy, nothing was planned or
                certain. During this period I got an opportunity to go to FC
                Metz thanks to Mr. Eric Benny. Playing at the Ligue 1 club in
                France was a dream come true. A budding football player
                couldn&apos;t have asked for a better platform to prove himself
                at that point in his career. Working with Mr. Eric Benny was a
                great pleasure. His helpful and polite attitude goes on to show
                that he is in this business to promote talent and he will go out
                of his way for doing that. His experience and track record shows
                his contribution to the games welfare. I am sure there are
                hundreds who would want to thank him and I would like take this
                opportunity to express my gratitude on behalf of all such
                players who got the opportunity to work with him. I wish him the
                very best for the future and hope he continuous to do good work
                for a long time so that budding players like me get the
                opportunity to work with such and experienced and knowledgeable
                person like him. I sure look forward to work with him again in
                the future.
              </P>
              <h3>Sarojini Thiru (M/O T.S. Pragithyan)</h3>
            </TextBoxDetail>
          </TextBox>
        </TestDetail>
        <TestDetail>
          <ImgBox>
            <img src="../../../test-4.jpeg" />
          </ImgBox>
          <TextBox>
            <TextBoxDetail>
              <P>
                Indian Football is still in its Developing phase and footballers
                from small cities have to struggle hard to be noticed. After
                being a part of the AIFF elite academy, nothing was planned or
                certain. During this period I got an opportunity to go to FC
                Metz thanks to Mr. Eric Benny. Playing at the Ligue 1 club in
                France was a dream come true. A budding football player
                couldn&apos;t have asked for a better platform to prove himself
                at that point in his career. Working with Mr. Eric Benny was a
                great pleasure. His helpful and polite attitude goes on to show
                that he is in this business to promote talent and he will go out
                of his way for doing that. His experience and track record shows
                his contribution to the games welfare. I am sure there are
                hundreds who would want to thank him and I would like take this
                opportunity to express my gratitude on behalf of all such
                players who got the opportunity to work with him. I wish him the
                very best for the future and hope he continuous to do good work
                for a long time so that budding players like me get the
                opportunity to work with such and experienced and knowledgeable
                person like him. I sure look forward to work with him again in
                the future.
              </P>
              <h3>Ravi Varanasi</h3>
            </TextBoxDetail>
          </TextBox>
        </TestDetail>
        <TestDetail>
          <ImgBox>
            <img src="../../../test-6.jpeg" />
          </ImgBox>
          <TextBox>
            <TextBoxDetail>
              <P>
                Indian Football is still in its Developing phase and footballers
                from small cities have to struggle hard to be noticed. After
                being a part of the AIFF elite academy, nothing was planned or
                certain. During this period I got an opportunity to go to FC
                Metz thanks to Mr. Eric Benny. Playing at the Ligue 1 club in
                France was a dream come true. A budding football player
                couldn&apos;t have asked for a better platform to prove himself
                at that point in his career. Working with Mr. Eric Benny was a
                great pleasure. His helpful and polite attitude goes on to show
                that he is in this business to promote talent and he will go out
                of his way for doing that. His experience and track record shows
                his contribution to the games welfare. I am sure there are
                hundreds who would want to thank him and I would like take this
                opportunity to express my gratitude on behalf of all such
                players who got the opportunity to work with him. I wish him the
                very best for the future and hope he continuous to do good work
                for a long time so that budding players like me get the
                opportunity to work with such and experienced and knowledgeable
                person like him. I sure look forward to work with him again in
                the future.
              </P>
              <h3>Aravind Ganapathi Raju</h3>
            </TextBoxDetail>
          </TextBox>
        </TestDetail>
        <TestDetail>
          <ImgBox>
            <img src="../../../test-7.jpeg" />
          </ImgBox>
          <TextBox>
            <TextBoxDetail>
              <P>
                Indian Football is still in its Developing phase and footballers
                from small cities have to struggle hard to be noticed. After
                being a part of the AIFF elite academy, nothing was planned or
                certain. During this period I got an opportunity to go to FC
                Metz thanks to Mr. Eric Benny. Playing at the Ligue 1 club in
                France was a dream come true. A budding football player
                couldn&apos;t have asked for a better platform to prove himself
                at that point in his career. Working with Mr. Eric Benny was a
                great pleasure. His helpful and polite attitude goes on to show
                that he is in this business to promote talent and he will go out
                of his way for doing that. His experience and track record shows
                his contribution to the games welfare. I am sure there are
                hundreds who would want to thank him and I would like take this
                opportunity to express my gratitude on behalf of all such
                players who got the opportunity to work with him. I wish him the
                very best for the future and hope he continuous to do good work
                for a long time so that budding players like me get the
                opportunity to work with such and experienced and knowledgeable
                person like him. I sure look forward to work with him again in
                the future.
              </P>
              <h3>M S Reddy</h3>
            </TextBoxDetail>
          </TextBox>
        </TestDetail>
      </Section>
    </>
  )
}

export default TestContent
