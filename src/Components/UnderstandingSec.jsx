import React from 'react'
import Scanner from './Scanner'
import processor from '../assets/processor.png'
import './section_1.css'

const UnderstandingSec = () => {
    return (
        // <div className='understanding_parent'>
        <div className='w-full mt-[80px]'>
            {/* <div className="und_p_child1"> */}
            <div>
                {/* <p className='und_p_child1_title'>uNDERSTANDING THE solpumpSECONOMY</p> */}
                <p className='text-[34px] sm:text-[44px]  lg:text-[88px] font-normal lg:leading-[114.4px] text-center'>uNDERSTANDING THE solpump SECONOMY</p>
                <div className='py-10 flex justify-around items-center flex-col md:flex-row gap-[25px]'>
                    <div>
                        <p className='und_p_child2_lg_text '>2oo <span>sol</span></p>
                        <p className='sora_font_txt1 '>Presale Amount</p>
                    </div>

                    <div>
                        <p className='und_p_child2_lg_text'>5o <span>sol</span></p>
                        <p className='sora_font_txt1'>Ryadium LP + 15% Token</p>
                    </div>

                    <div>
                        <p className='und_p_child2_lg_text'><span style={{ fontWeight: 'bold' }}>7</span>5 <span>sol</span></p>
                        <p className='sora_font_txt1'>Marketing</p>
                    </div>
                </div>
            </div>


            {/*  */}
            <div className='und_p_child2 w-full h-[1108px] hidden sm:inline-block'>
                <div className='relative ' style={{ width: '100%', height: 'inherit', display: 'flex', justifyContent: 'center', }}>

                    {/* scanner start */}
                    <Scanner />
                    {/* scanner end */}


                    <div className='w-[70vw]  md:w-[480px] h-[101px] p-[20px] px-[24px] rounded-[72px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312]'>
                        <p className="font-sora text-[14px] font-normal text-center text-[#FFFFFF80]">Name</p>
                        <p className='text-2xl font-normal text-center text-white'>solpump</p>
                    </div>

                    <div className=' w-full relative'>
                        <div className='w-[25vw] lg:w-[402px] h-[406px] m-auto flex items-center'>
                            <img src={processor} alt="processor_img" width={'100%'} />
                            {/* left */}
                            {/* <div className='w-[564px] h-[552px]  absolute top-[-20%] left-[-20%] opacity-50'
                            style={{ background: 'radial-gradient(50% 50% at 50% 50%, #9D70FF 0%, rgba(137, 62, 174, 0) 100%)' }}
                        ></div> */}
                            <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] absolute top-0 left-[1%] lg:left-[10%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Raydium LP</p>
                                <p className='text-2xl font-normal text-center text-white'>i5%</p>
                            </div>
                            <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] absolute top-[40%] left-[1%] lg:left-[10%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Marketing</p>
                                <p className='text-2xl font-normal text-center text-white'>i5%</p>
                            </div>
                            <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] absolute  top-[80%] left-[1%] lg:left-[10%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>CEX listing</p>
                                <p className='text-2xl font-normal text-center text-white'>5%</p>
                            </div>
                            {/* right */}
                            <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] absolute top-0 right-[1%] lg:right-[10%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Symbol</p>
                                <p className='text-2xl font-normal text-center text-white'>$FRIENDS</p>
                            </div>
                            <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] absolute top-[40%] right-[1%] lg:right-[10%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Supply</p>
                                <p className='text-2xl font-normal text-center text-white'>1o,ooo,ooo</p>
                            </div>
                            <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] absolute top-[80%] right-[1%] lg:right-[10%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Presale</p>
                                <p className='text-2xl font-normal text-center text-white'>5o%</p>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className='w-[402px] rounded-[44px] flex justify-between mt-[80px]' >
                        <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] '>
                            <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Development</p>
                            <p className='text-2xl font-normal text-center text-white'>io%</p>
                        </div>
                        <div className='hidden sm:block p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-gradient-to-b from-[#201034] to-[#0A0312] '>
                            <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Advisors/KOLs</p>
                            <p className='text-2xl font-normal text-center text-white'>5%</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>)
}

export default UnderstandingSec