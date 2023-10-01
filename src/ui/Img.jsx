/* eslint react/prop-types: 0 */
import styled from 'styled-components'

const StyledImg = styled.img`
  height: 100%;
  width: 100%;
`

function Img({ src, alt }) {
  return <StyledImg src={src} alt={alt} />
}

export default Img
