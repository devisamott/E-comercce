import { HeadBoard } from './components/headBoard'
import { Header } from './components/header'
import { Provider } from './provider'
import { CountDown } from './screens/home/countDown'
import { Sidebar } from './screens/home/siderbar'
import { Slider } from './screens/home/slider'
import { Today } from './screens/home/today'
import { FlashSales } from './screens/home/today/flashSalesList'

function App() {
  return (
    <Provider>
      <Header/>
      <HeadBoard/>
      <Sidebar/>
      <Slider/>
      <Today/>
      <CountDown/>
      <FlashSales/>
    </Provider>
  )
}

export default App
