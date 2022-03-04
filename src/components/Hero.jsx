import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`
const Title = styled.h1`
  position: absolute;
  bottom: 15%;
  right: 10%;
  color: white;
  font-size: 4rem;
  padding: 15px;
`

const Hero = ({ imageSrc }) => {
  return (
    <Container>
      <Image src={imageSrc} />
      <Title>Travel made simple.</Title>
    </Container>
  )
}

export default Hero
