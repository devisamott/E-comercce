import { HeadBoard } from './components/headBoard'
import { Header } from './components/header'
import { Provider } from './provider'
import { BuyNow } from './screens/home/buyNow'
import { Categories } from './screens/home/categories'
import { CountDown } from './screens/home/countDown'
import { OurProducts } from './screens/home/ourProducts'
import { Sidebar } from './screens/home/siderbar'
import { Slider } from './screens/home/slider'
import { ThisMont } from './screens/home/thisMont'
import { CarouselFashSales } from './screens/home/today/carouselFlashSales'
import { Titles } from './screens/home/today/titles'
import { Featured } from './screens/home/featured'
import { Services } from './screens/home/servicess'
import { Information } from './screens/home/information'


function App() {
  return (
    <Provider>
      <Header/>
      <HeadBoard/>
      <Sidebar/>
      <Slider/>
      <Titles/>
      <CountDown/>
      <CarouselFashSales/>
      <Categories/>
      <ThisMont/>
      <BuyNow/>
      <OurProducts/>
      <Featured/> 
      <Services/>
      <Information/>
    </Provider>
  )
}

export default App
