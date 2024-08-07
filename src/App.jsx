import './App.css'
import './index.css'
import Navbar from './Components/Navbar'
import OnChainSec from './Components/OnChainSec'
import BridgingSec from './Components/BridgingSec'
import UnlockingSec from './Components/UnlockingSec'
import FooterSec from './Components/FooterSec'
import UnderstandingSec from './Components/UnderstandingSec'

const App = () => <div className='bg-black'>
  <Navbar />
  <div className='px-0 md:px-10 text-white' >
    {/* okay💫 */}
    <OnChainSec />
    <BridgingSec />
    <UnlockingSec />
    <UnderstandingSec />
    <FooterSec />
  </div>
</div>



export default App
