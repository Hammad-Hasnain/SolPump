import { AiOutlineDiscord } from 'react-icons/ai'
import rotated_arrow from '../assets/rotated_arrow.png'
import { FaTelegramPlane } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer = () => <footer className='w-full flex justify-between items-center bg-black rounded-full py-[10px] px-[20px]'>
    <div className='w-[50px] lg:w-[72px] h-[50px] lg:h-[72px] '>
        <img src={rotated_arrow} alt="logo" width={'100%'} />
    </div>

    <div className="w-fit hidden lg:inline-block">
        <ul className='flex gap-12'>
            {
                ["HOME", "ABOUT", "FEATURES", "ROADMAP", "TOKENOMICS"].map((e, i) =>
                    <li><button className='hover:text-gray-400'>{e}</button></li>
                )
            }
        </ul>
    </div>

    <div className='flex gap-3'>
        {/* {[<FaTelegramPlane size={'24px'} />, */}
        {[<FaTelegramPlane className='size-4 lg:size-7' />,
        <FaXTwitter className='size-4 lg:size-7' />,
        <AiOutlineDiscord className='size-4 lg:size-7' />,].map((e, i) => <div className="w-[32px] lg:w-[42px] h-[32px] lg:h-[42px] border border-white rounded-[52px] flex justify-center items-center">
            {e}
        </div>)}
    </div >
</footer >

export default Footer