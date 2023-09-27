import { useEffect, useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import imageSlide from './data'

const slideUp = keyframes`
0%{
  visibility: visible;
  top: 23rem
}
100%{
  visibility: visible;
  top: 17rem
}
`

const StyledSlider = styled.div`
  width: 80vw;
  height: 90vh;
  position: relative;
  overflow: hidden;
`

const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translateX(-50%);
  transition: all 1s ease;

  ${(props) =>
    props.type === 'current' &&
    css`
      opacity: 1;
      transform: translateX(0);
    `}
`
const Content = styled.div`
  position: absolute;
  top: 23rem;
  left: 5rem;
  opacity: 0;
  width: 50%;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.3);
  animation: ${slideUp} 1s ease-out;

  & > h2,
  p {
    color: white;
    margin-bottom: 1rem;
  }
`

function Slider() {
  const [current, setCurrent] = useState(0)
  const slideLength = imageSlide.length
  console.log(slideLength)

  const autoScroll = true

  let slideInterval
  let intervalTime = 5000

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    setCurrent(0)
  }, [])

  useEffect(() => {
    if (autoScroll) {
      auto()
    }

    return () => {
      clearInterval(slideInterval)
    }
  }, [current])
  function nextSlide() {
    setCurrent(current === slideLength - 1 ? 0 : current + 1)
  }
  function prevSlide() {
    setCurrent(current === 0 ? slideLength - 1 : current - 1)
  }
  return (
    <StyledSlider>
      <HiChevronLeft
        onClick={prevSlide}
        style={{
          color: 'white',
          fontSize: '20px',
          border: '2px solid white',
          background: 'transparent',
          width: '5rem',
          height: '5rem',
          curser: 'pointer',
          position: 'absolute',
          zIndex: '999',
          top: '35%',
          left: '1.5rem',
        }}
      />
      <HiChevronRight
        onClick={nextSlide}
        style={{
          color: 'white',
          fontSize: '20px',
          border: '2px solid white',
          background: 'transparent',
          width: '5rem',
          height: '5rem',
          curser: 'pointer',
          position: 'absolute',
          zIndex: '999',
          top: '35%',
          right: '1.5rem',
        }}
      />

      {imageSlide.map((slide, index) => {
        return (
          <Slide key={index} type={index === current ? 'current' : 'slide'}>
            {index === current && (
              <>
                <img src={slide.url} alt="slide" />
                <Content>
                  <h2>{slide.title}</h2>
                  <p>{slide.body}</p>
                </Content>
              </>
            )}
          </Slide>
        )
      })}
    </StyledSlider>
  )
}

export default Slider
