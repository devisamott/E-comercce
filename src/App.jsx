import { HeadBoard } from './components/headBoard'
import { Header } from './components/header'
import { Provider } from './provider'
import { Sidebar } from './screens/home/siderbar'
import { Slider } from './screens/home/slider'

function App() {
  return (
    <Provider>
      <Header/>
      <HeadBoard/>
      <Sidebar/>
      <Slider/>
    </Provider>
  )
}

export default App
