import React from 'react'
import { StyledFooter } from '../PageLayout.styled'

const Footer = (): React.ReactElement => {
  return (
    <StyledFooter>
      Data fetched from &nbsp;
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://covid19api.com/"
      >
        COVID-19 Public API
      </a>{' '}
    </StyledFooter>
  )
}

export default Footer
