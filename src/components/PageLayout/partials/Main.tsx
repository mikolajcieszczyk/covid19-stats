import React from 'react'
import { StyledMain } from '../PageLayout.styled'
import StackedAreaChart from '../../charts/BarChart'

const Main = (): React.ReactElement => {
  return (
    <StyledMain>
      <StackedAreaChart />
    </StyledMain>
  )
}

export default Main
