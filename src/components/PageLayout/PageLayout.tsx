import React from 'react'
import styled from 'styled-components'
import Header from './partials/Header'
import Main from './partials/Main'
import { Container } from './PageLayout.styled'
import Footer from './partials/Footer'

const PageLayout = (): React.ReactElement => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default PageLayout
