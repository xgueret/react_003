import React from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer'

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transform: ${(props) => (props.inView ? `scale(100%)` : `scale(80%)`)};
  transition: 2s;
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
`

const Image = styled.img`
  width: 60%;
`

const Title = styled.h1`
  text-align: center;
`

const SubTitle = styled.p``
const Slider = ({ imageSrc, title, subtitle, flipped }) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.4,
  })

  const renderContent = () => {
    if (!flipped) {
      return (
        <>
          <Content>
            <Image src={imageSrc} alt="Travel" />
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </Content>
        </>
      )
    } else {
      return (
        <>
          <Content>
            <Title>{title}</Title>
            <SubTitle>{subtitle}</SubTitle>
          </Content>
          <Image src={imageSrc} alt="Travel" />
        </>
      )
    }
  }

  return (
    <Container inView={inView} ref={ref}>
      {renderContent()}
    </Container>
  )
}

export default Slider
