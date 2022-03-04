import styledComponents from 'styled-components'
import travel_01 from './asset/travel1.jpg'
//import travel_02 from './assets/travel-02.jpg'
//import travel_03 from './assets/travel-03.jpg'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
/*import Slider from './components/Slider'*/

const Container = styledComponents.div``

const App = () => {
  return (
    <Container>
      <Navbar />
      <Hero imageSrc={travel_01} />
      {/*<Slider />*/}
    </Container>
  )
}

export default App
