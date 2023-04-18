import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Row = styled.div`
  display: flex;
`

export const StyledHeader = styled(Row)`
  height: 100px;
  align-self: center;
`

export const StyledMain = styled(Row)`
  flex: 1;
`

export const StyledFooter = styled(Row)`
  height: 50px;
  align-self: center;
`
