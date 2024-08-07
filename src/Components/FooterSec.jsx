import React from 'react'
import Arrow from './Arrow'
import Footer from './Footer'
import FooterGradient from './FooterGradient'

const FooterSec = () => {
    return (
        // <div className='w-full h-[715px] rounded-[40px] bg-[#0A0B0D] flex flex-col items-center justify-between p-[30px_10px] overflow-hidden relative'>
        <div className='w-full h-[515px] lg:h-[715px] rounded-[40px] bg-[#0A0B0D] flex flex-col items-center justify-between p-[30px_10px] overflow-hidden relative mt-[100px]'>
            <>
                {/* <div className="w-fit h-[334px] m-auto flex flex-col relative z-[4]" > */}
                {/* <div className="w-fit h-[334px]  flex flex-col  relative z-[4]" > */}
                <div className="w-fit flex flex-col  relative z-[4]" >
                    {/* <p className='text-[88px]  leading-[114.4px] text-center'>ready when you are</p> */}
                    <p className='text-[40px] sm:text-[44px]  lg:text-[88px] font-normal lg:leading-[114.4px] text-center'>ready when you are</p>
                    {/* <div className='w-fit m-auto '> */}
                    <div className='text-center '>
                        <p className='text-[20px] sm:text-[33px] lg:text-[44px] leading-[44px]'>join community</p>
                        <div className='flex justify-center mt-4'>
                            <Arrow />
                        </div>
                    </div>
                </div>

                <div className='w-full mt-auto'>
                    <Footer />
                </div>
            </>

            <div className='w-full flex justify-center'>
                <FooterGradient />
            </div>
        </div>)
}

export default FooterSec