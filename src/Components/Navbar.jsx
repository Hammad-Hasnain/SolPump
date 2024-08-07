import { VscThreeBars } from 'react-icons/vsc'
import rotated_arrow from '../assets/rotated_arrow.png'
import { useState } from 'react'
const Navbar = () => {
    const [isNavBtnClicked, setIsNavBtnClicked] = useState(false)

    const navRespHandler = () => {
        setIsNavBtnClicked(prev => !prev)
        // console.log(isNavBtnClicked)
    }


    return <nav className='w-[100%]  p-6 flex justify-between items-center opacity-1  bg-transparent relative'>
        <div className='w-[32px] md:w-[52px] lg:w-[72px] h-[32px] md:h-[52px] lg:h-[72px] '>
            <img src={rotated_arrow} alt="logo" width='100%' />
        </div>
        <div className='hidden lg:flex  items-center gap-[48px]'>
            <div>
                <ul className="flex gap-[48px] text-white  text-[14px] ">
                    {
                        ["HOME", "ABOUT", "FEATURES", "ROADMAP", "TOKENOMICS"].map((e, i) =>
                            <li><button className='hover:text-gray-400'>{e}</button></li>
                        )
                    }
                </ul>
            </div>
            <div className='h-full'>
                <button className=' h-full p-1 px-6 rounded-full bg-gradient-to-l from-[#42EDBC] to-[#C632FB]'>jOIN COMMUNITY</button>
            </div>
        </div>
        {/* responsive btn */}
        <div className=' lg:hidden'>
            <button onClick={navRespHandler}>
                <VscThreeBars className='text-white size-[30px] md:size-[40px]' />
            </button>
        </div>
        {/* responsive ul*/}
        <div className={`${!isNavBtnClicked && 'hidden'}  transiton duration-300 ease-in-out  h-auto absolute top-full  right-0 w-full bg-[#000000] shadow-md p-5 z-[5]`}>
            <div>
                <ul className="flex flex-col items-center gap-10 text-white  text-[14px] ">
                    {
                        ["HOME", "ABOUT", "FEATURES", "ROADMAP", "TOKENOMICS"].map((e, i) =>
                            <li><button className='hover:text-gray-400'>{e}</button></li>
                        )
                    }
                </ul>
            </div>
            <div className='text-center mt-10'>
                <button className=' h-full p-1 px-6 rounded-full bg-gradient-to-l from-[#42EDBC] to-[#C632FB]'>jOIN COMMUNITY</button>
            </div>
        </div>
    </nav>
}


export default Navbar