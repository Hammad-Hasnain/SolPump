import React from 'react'
import Box_shadow from './Box_shadow'
import LightningComp from './LightningComp'
import Arrow from './Arrow'

const OnChainSec = () => {
    return (
        <div className='onchain_parent relative overflow-hidden'>
            <div className='py-[90px]' >
                <div className='pb-[30px] md:pb-[160px]'>
                    <div>
                        {/* <button className='game_btn'>game</button> */}
                        <button className="px-[26px] md:px-[36px]  py-[14px] md:py-[24px] mb-[16px] rounded-[44px] bg-white text-[#120D16] text-[22px] md:text-[32px] font-bold">game</button>
                    </div>
                    {/*  */}
                    <h1 className='onchain_title text-[35px] xs:text-[45px] sm:text-[70px] md:text-[100px] lg:text-[130px] xl:text-[170px]'>THE ONCHAIN</h1>
                    {/*  */}
                    <h2 className='solana_title text-[22px] xs:text-[28px] md:text-[50px] lg:text-[70px] xl:text-[110px] '>SOLANA PREDICTING</h2>
                </div>
                {/* <div className='ellipse_3625'>

                </div> */}
                {/* <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative', zIndex: '2' }}> */}


                <div className='flex flex-col lg:flex-row items-center md:justify-around gap-[30px] lg:gap-0 relative z-20'>
                    {/* <p className='dummy_content_p'> */}
                    <p className='font-sora text-base font-normal leading-5 text-white w-full px-8 lg:w-[380px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 }}> */}
                    <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
                        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}> */}
                        <div className='w-full flex justify-between md:justify-center items-center gap-5'>
                            <p className='text-[20px] sm:text-[30px] md:text-[40px]'>DEX tools
                            </p>
                            <Arrow />
                        </div>
                        <div className='w-full flex justify-between md:justify-center items-center gap-5'>
                            <p className='text-[20px] sm:text-[30px] md:text-[40px]'>RAYDIUM </p>
                            <Arrow />
                        </div>
                    </div>

                </div>
            </div>
            <div className="absolute bottom-0 left-1/2 opacity-50 h-[600px] z-[1] overflow-hidden transform -translate-x-1/2">
                <Box_shadow />
            </div>
            <div className='absolute bottom-0 left-[30%]' >
                <LightningComp />
            </div>
            <div className='absolute bottom-[20%] left-[20%]'>
                <LightningComp />
            </div>
            <div className='absolute bottom-[27%] left-[35%]'>
                <LightningComp />
            </div>
            <div className='absolute bottom-[20%] left-1/2'>
                <LightningComp />
            </div>
            <div className='absolute bottom-[30%] left-[60%]'>
                <LightningComp />
            </div>
            <div className='absolute bottom-[10%] left-[70%]'>
                <LightningComp />
            </div>
        </div>)
}

export default OnChainSec