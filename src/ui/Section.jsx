/* eslint react/prop-types: 0*/
import styled, { css } from 'styled-components'
import { devicesMax } from '../styles/BreakPoint'

const StyledSection = styled.section`
margin-bottom: 8rem;

  ${(props) =>
    props.type === 'welcome' &&
    css`
      height: 60rem;
    `}

 ${(props) =>
   props.type === 'about' &&
   css`
     /* padding: 4rem; */

     /* @media ${devicesMax.lg} {
       padding: 2rem;
     } */
   `}
  ${(props) =>
    props.type === 'touch' &&
    css`
      padding: 2rem;
    `}
    ${(props) =>
      props.type === 'gallery' &&
      css`
        padding: 4rem;
      `}
`
function Section({ children, type }) {
  return <StyledSection type={type}>{children}</StyledSection>
}

export default Section
