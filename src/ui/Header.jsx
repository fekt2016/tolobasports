/* eslint react/prop-types :0*/
import styled, { css } from 'styled-components'

const StyledHeader = styled.header`
  height: 40rem;
  margin-bottom: 6rem;


  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;


  ${(props) =>
    props.images === 'contact' &&
    css`
      background-image: url('../../../pc6.jpg');
    `}
  ${(props) =>
    props.images === 'about' &&
    css`
      background-image: url('../../../pc7.jpg');
    `}
  ${(props) =>
    props.images === 'faq' &&
    css`
      background-image: url('../../../pc4.jpg');
    `}
  ${(props) =>
    props.images === 'scout' &&
    css`
      background-image: url('../../../pc37.jpg');
    `}
    ${(props) =>
      props.images === 'mentor' &&
      css`
        background-image: url('../../../pc10.jpg');
      `}
`
function Header({ images }) {
  return <StyledHeader images={images} />
}

export default Header
