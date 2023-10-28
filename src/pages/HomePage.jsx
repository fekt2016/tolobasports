import Interest from '../features/home/Interest'
import NewsArticle from '../features/home/NewsArticle'
import Welcome from '../features/home/Welcome'

import Section from '../ui/Section'

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
