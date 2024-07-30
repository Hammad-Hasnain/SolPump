import rotated_arrow from '../assets/rotated_arrow.png'
const Navbar = () => {
    return <nav className='w-[100%]  p-6 flex justify-between opacity-1  bg-transparent '>
        <div className='w-[72px] h-[72px] '>
            <img src={rotated_arrow} alt="logo" width='100%' />
        </div>
        <div className='flex items-center gap-[48px]'>
            <div>
                <ul className="flex gap-[48px] text-white text-[14px] ">
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
    </nav>
}


export default Navbar