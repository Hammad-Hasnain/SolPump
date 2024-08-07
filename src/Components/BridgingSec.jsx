import React from 'react'
import CircleGradient from './CircleGradient'
import rotated_arrow from '../assets/rotated_arrow.png'




const BridgingSec = () => {
    return (
        <div >
            {/* <div className="w-full h-[1170px]"> */}
            <div className="w-full">
                <p className="text-[24px] sm:text-[44px]  lg:text-[88px] font-normal lg:leading-[114.4px] text-center">
                    Bridging digital worlds the power of connection</p>
                <p className="w-full lg:w-[856px] font-sora p-2 text-[10px] sm:text-[13px] lg:text-[16px] leading-[20.8px] text-center m-auto">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                <div>
                    <div className="flex justify-center items-center w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] rounded-[422.79px] border border-[#80808038] relative overlfow-hidden">
                        {/* <div className="flex justify-center items-center w-[1200px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[750px] rounded-[422.79px] border border-[#80808038] relative "> */}
                        <CircleGradient style={{ position: 'absolute', top: '12%', left: '7%' }} />
                        <CircleGradient style={{ position: 'absolute', top: '80%', left: '5%' }} />
                        <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative" >
                            <CircleGradient style={{ position: 'absolute', top: '12%', left: '7%' }} />
                            <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative">
                                <CircleGradient style={{ position: 'absolute', top: '75%', left: '3%' }} />
                                <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative">
                                    <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative">
                                        <CircleGradient style={{ position: 'absolute', top: '0%', left: '50%' }} />
                                        <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative">
                                            <CircleGradient style={{ position: 'absolute', top: '12%', left: '3%' }} />
                                            <CircleGradient style={{ position: 'absolute', top: '95%', left: '45%' }} />
                                            <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative">
                                                <div className="border border-[#80808038] w-4/5 h-4/5 rounded-[422.79px] flex justify-center items-center relative">
                                                    <div className="w-full h-full rounded-[422.79px] bg-gradient-to-b from-[#2B1645] to-[#9442BA] flex justify-center items-center" >
                                                        <img src={rotated_arrow} alt="arrow_img" width={'30%'} />
                                                    </div>
                                                    <div className='b_p_btn_ellipse w-[125px] lg:w-[350px] h-[55px] lg:h-[155px] absolute top-[45%] lg:top-[28%] left-[-25%] lg:left-[-10%]' style={{ opacity: '0.5' }}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <CircleGradient style={{ position: 'absolute', top: '70%', left: '95%' }} />
                                    </div>
                                    <CircleGradient style={{ position: 'absolute', top: '10%', left: '105%' }} />
                                </div>
                            </div>
                            <CircleGradient style={{ position: 'absolute', top: '10%', left: '105%' }} />
                        </div>
                        <CircleGradient style={{ position: 'absolute', top: '87%', left: '90%' }} />
                    </div>
                </div>
            </div>

        </div>)
}

export default BridgingSec