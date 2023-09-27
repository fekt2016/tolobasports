import { HiOutlineNewspaper } from 'react-icons/hi2'
import styled from 'styled-components'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const StyledNews = styled.div`
  background-color: var(--color-white-900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function NewsLetter() {
  return (
    <StyledNews>
      <HiOutlineNewspaper style={{ fontSize: '100px' }} />
      <Row>
        <Heading as="h1">Subscribe to our newsletter</Heading>
      </Row>
      <di>
        <p>
          Join our subscribers list to get the latest news and updates delivered
          directly in your inbox.
        </p>

        <Form>
          <Input type="text" placeholder="Enter Your Name" />
          <Input type="email" placeholder="Enter Your Email" />

          <Button>SUBSCRIBE</Button>
        </Form>
        <p>Download the latest version of our newsletter</p>
      </di>
    </StyledNews>
  )
}

export default NewsLetter
