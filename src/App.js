import React from 'react'
import styled from 'styled-components'
import { Switch } from './components'

export default () => (
  <Container>
    <Switch />
  </Container>
)

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`