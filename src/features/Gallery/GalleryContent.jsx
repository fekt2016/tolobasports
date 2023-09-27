import styled from 'styled-components'
import { devicesMax } from '../../styles/BreakPoint'

const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;

  gap: 10px;

  @media ${devicesMax.md} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${devicesMax.sm} {
    grid-template-columns: 1fr;
  }
`

const Img = styled.img`
  border: 2px solid var(--color-primary-0);
  transition: all 0.3s;
  width: 100%;
  height: 144px;
  &:hover {
    transform: scale(1.2);
  }
`
function GalleryContent() {
  return (
    <Images>
      <Img src="../../../pic1.jpeg" atl="pc1" />
      <Img src="../../../pc3.jpg" atl="pc9" />
      <Img src="../../../pc10.jpg" atl="pc8" />
      <Img src="../../../pc11.jpg" atl="pc9" />
      <Img src="../../../pc12.jpg" atl="pc6" />
      <Img src="../../../pc13.jpg" atl="pc4" />
      <Img src="../../../pc14.jpg" atl="pc5" />
      <Img src="../../../pc15.jpg" atl="pc3" />
      <Img src="../../../pc16.jpg" atl="pc1" />
      <Img src="../../../pc17.jpeg" atl="pc9" />
      <Img src="../../../pc18.jpeg" atl="pc8" />
      <Img src="../../../pc19.jpeg" atl="pc9" />
      <Img src="../../../pc21.jpeg" atl="pc6" />
      <Img src="../../../pc22.jpeg" atl="pc4" />
      <Img src="../../../pc23.jpg" atl="pc5" />
      <Img src="../../../pc24.jpg" atl="pc3" />
    </Images>
  )
}

export default GalleryContent
