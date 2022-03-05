import styledComponents from 'styled-components'
import travel_01 from './assets/hero.jpg'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Slider from './components/Slider'

import { links, sliders } from './data'

const Container = styledComponents.div``
const SliderContainer = styledComponents.div``

const App = () => {
  return (
    <Container>
      <Navbar links={links} />
      <Hero imageSrc={travel_01} />
      <SliderContainer>
        {sliders.map((itemslider) => {
          return (
            <Slider
              key={itemslider.id}
              imageSrc={itemslider.url}
              title={itemslider.title}
              subtitle={itemslider.subtitle}
              flipped={itemslider.flipped}
            />
          )
        })}
      </SliderContainer>
    </Container>
  )
}

export default App
