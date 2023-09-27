import styled from 'styled-components'

const StyledFooter = styled.footer`
  color: var(--color-white-900);
  height: 10rem;
  padding: 2rem;
  font-size: 1.2rem;
  background-image: url('../../pc31.jpg');
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: space-around;
`

function Footer() {
  return (
    <StyledFooter>
      <p>&#169;Copyright 2019 Toloba sports. All rights reserved.</p>

      <div></div>
    </StyledFooter>
  )
}

export default Footer
