import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import Section_1 from './Components/Section_1'
import BgBoxes from './Components/BgBoxes'
// import Group427Line from './Components/Group427Line'
// import PotraitGradient from './Components/PotraitGradient'

const App = () => <div className='bg-black'>
  {/* <BgBoxes /> */}

  <Navbar />
  {/* <div className='px-10' style={{ padding: '0 40px', }}> */}
  <div className='px-10' >
    <Section_1 />
  </div>
</div>



export default App
