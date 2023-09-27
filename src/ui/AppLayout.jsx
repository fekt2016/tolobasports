import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../ui/Footer'

import Header from '../features/home/HomeHeader'

const StyledAppLayout = styled.div``

const Main = styled.main`
  width: 100%;
`

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  )
}

export default AppLayout
