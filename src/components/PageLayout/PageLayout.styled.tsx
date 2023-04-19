import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
`

const Row = styled.div`
  display: flex;
`

export const StyledHeader = styled(Row)`
  height: 100px;
  align-self: center;

  font-family: var(--ff-nunito);
  font-size: 24px;
`

export const StyledMain = styled(Row)`
  flex: 1;
`

export const StyledFooter = styled(Row)`
  font-size: var(--fs-16);
  height: 50px;
  align-self: center;

  a {
    color: red;
    text-decoration: none;
  }
`
