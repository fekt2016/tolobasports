import Interest from '../features/home/Interest'
import NewsArticle from '../features/home/NewsArticle'
import Welcome from '../features/home/Welcome'
import Heading from '../ui/Heading'

import Section from '../ui/Section'
import Underline from '../ui/UnderLine'

function HomePage() {
  return (
    <>
      <Section type="welcome">
        <Welcome />
      </Section>
      <Section type="interests">
        <Interest />
      </Section>
      <Section>
        <NewsArticle />
      </Section>
    </>
  )
}

export default HomePage
