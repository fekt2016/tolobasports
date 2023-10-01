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
  width: 100%;
  height: 254px;

  transition: all 0.3s;
  &:hover {
    transform: scale(1.5);
  }
`
function GalleryContent() {
  return (
    <Images>
      <Img src="../../../images/pc1.jpeg" atl="pc1" />
      <Img src="../../../images/pc2.jpeg" atl="pc1" />
      <Img src="../../../images/pc3.jpeg" atl="pc1" />
      <Img src="../../../images/pc4.jpeg" atl="pc1" />
      <Img src="../../../images/pc5.jpeg" atl="pc1" />
      <Img src="../../../images/pc6.jpeg" atl="pc1" />
      <Img src="../../../images/pc7.jpeg" atl="pc1" />
      <Img src="../../../images/pc8.jpeg" atl="pc1" />
      <Img src="../../../images/pc9.jpeg" atl="pc1" />
      <Img src="../../../images/pc10.jpeg" atl="pc1" />
      <Img src="../../../images/pc11.jpeg" atl="pc1" />
      <Img src="../../../images/pc12.jpeg" atl="pc1" />
      <Img src="../../../images/pc13.jpeg" atl="pc1" />
      <Img src="../../../images/pc14.jpeg" atl="pc1" />
      <Img src="../../../images/pc15.jpeg" atl="pc1" />
      <Img src="../../../images/pc16.jpeg" atl="pc1" />
      <Img src="../../../images/pc17.jpeg" atl="pc1" />
      <Img src="../../../images/pc18.jpeg" atl="pc1" />
      <Img src="../../../images/pc19.jpeg" atl="pc1" />
      <Img src="../../../images/pc20.jpeg" atl="pc1" />
    </Images>
  )
}

export default GalleryContent
