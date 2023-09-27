import styled, { css } from 'styled-components'
import Section from '../../ui/Section'
import Form from '../../ui/Form'
import Input from '../../ui/Input'
import Row from '../../ui/Row'
import Heading from '../../ui/Heading'
import Underline from '../../ui/UnderLine'
import Button from '../../ui/Button'
import Select from '../../ui/Select'
import Textarea from '../../ui/Textarea'
import { devicesMax } from '../../styles/BreakPoint'

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;

  @media ${devicesMax.md} {
    flex-direction: column;
  }
  ${(props) =>
    props.cols === 'col' &&
    css`
      flex-direction: column;
    `}
  ${(props) =>
    props.cols === 'sub' &&
    css`
      margin: 0 auto;
      display: flex;
      justify-content: center;
    `}
`

function ContactForm() {
  return (
    <Section type="touch">
      <Row>
        <Heading as="h1">Get In Touch</Heading>
        <Underline />
      </Row>
      <Form>
        <FormRow>
          <Input placeholder="Name" type="text" dist="col" />
          <Input placeholder="Location" type="text" dist="col" />
        </FormRow>
        <FormRow cols="inline">
          <Input placeholder="Email" type="text" dist="col" />
          <Input placeholder="Phone" type="text" dist="col" />
        </FormRow>
        <FormRow cols="col">
          <Select
            options={[
              { value: 'Choose Your Interest', label: 'Choose Your Interest' },
              {
                value: 'Residential FootBall School',
                label: 'Residential FootBall School',
              },
              { value: 'Football Acadamy', label: 'Football Acadamy' },
              { value: 'European Programmes', label: 'European Programmes' },
              { value: 'Coach Education', label: 'Coach Education' },
              { value: 'Partner With Us', label: 'Partner With Us' },
              { value: 'Employment', label: 'Employment' },
              { value: 'Mentoring', label: 'Mentoring' },
              { value: 'Scouting', label: 'Scouting' },
              { value: 'Others', label: 'Others' },
            ]}
          ></Select>
          <Textarea placeholder="Your Message" type="textArea" />
        </FormRow>
        <FormRow cols="sub">
          <Button>Submit</Button>
        </FormRow>
      </Form>
    </Section>
  )
}

export default ContactForm
