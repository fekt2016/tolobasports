import { HiOutlineNewspaper } from 'react-icons/hi2'
import styled from 'styled-components'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import { useState } from 'react'
import { useCreateSub } from './useCreateSub'
import SpinnerMini from '../../ui/SpinnerMini'

const StyledNews = styled.div`
  background-color: var(--color-white-900);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function NewsLetter() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const { subscribers, isCreating } = useCreateSub()

  function handleSubmit(e) {
    e.preventDefault()
    console.log(email, fullName)

    subscribers({ email, fullName })
  }

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

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="fullName"
            placeholder="Enter Your full Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button>{isCreating ? <SpinnerMini /> : 'SUBSCRIBE'}</Button>
        </Form>
        <p>Download the latest version of our newsletter</p>
      </di>
    </StyledNews>
  )
}

export default NewsLetter
