import GalleryContent from '../features/Gallery/GalleryContent'
import Heading from '../ui/Heading'
import Row from '../ui/Row'
import Section from '../ui/Section'
import Underline from '../ui/UnderLine'

function Gallery() {
  return (
    <Section type="gallery">
      <Row>
        <Heading as="h2">Images Gallery</Heading>
        <Underline />
      </Row>
      <GalleryContent />
    </Section>
  )
}

export default Gallery
