import React, { useState } from 'react'
import PotraitGradient from './PotraitGradient'
import Group427Line from './Group427Line'

const UnlockingSec = () => {

    const [activeButton, setActiveButton] = useState('inception');


    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };








    return (
        <div className='relative'>
            <PotraitGradient style={{ position: 'absolute', top: '50%', left: '22%', transform: ' translateX(-50%)' }} />
            <div className="unlocking_parent" style={{ marginBottom: '50px' }} >
                {/* <p className='u_p_para1'>Unlocking solpump essentials</p> */}
                <p className='text-[34px] sm:text-[44px]  lg:text-[88px] font-normal lg:leading-[114.4px] text-center'>Unlocking solpump essentials
                </p>
                {/* <p className='u_p_para2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p> */}
                <p className='w-full lg:w-[856px] font-sora text-[10px] sm:text-[13px] lg:text-[16px] leading-[20.8px] text-center m-auto p-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
            </div>

            <div className="sbst_parent">
                {/* <p className='sbst_child_title'>SOL IO </p> */}
                <div className='sbst_child w-[95%] sm:w-[600px] h-[auto] p-[36px_2px_54px_2px] flex flex-col justify-between '>
                    <p className='text-[40px] font-normal leading-[52px] text-center uppercase bg-gradient-to-b from-[#D17DFF] via-[#D17DFF] to-[#FFFFFF] bg-clip-text text-transparent'>SOL IO </p>
                    <Group427Line />
                    {/* <p className='w-[100%] lg:w-[466px] p-2 h-[84px] mx-auto text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p> */}
                    <p className='w-[100%]  lg:w-[466px] p-2 mx-auto text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                {/*  */}
                <div className='sbst_child w-[95%] sm:w-[600px] h-[auto] p-[36px_2px_54px_2px] flex flex-col justify-between'>
                    <p className='text-[40px] font-normal leading-[52px] text-center uppercase bg-gradient-to-b from-[#D17DFF] via-[#D17DFF] to-[#FFFFFF] bg-clip-text text-transparent'>bonds </p>
                    <Group427Line />
                    <p className='w-[100%] lg:w-[466px] p-2 mx-auto text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                {/*  */}
                <div className='sbst_child w-[95%] sm:w-[600px] h-[auto] p-[36px_2px_54px_2px] flex flex-col justify-between'>
                    <p className='text-[40px] font-normal leading-[52px] text-center uppercase bg-gradient-to-b from-[#D17DFF] via-[#D17DFF] to-[#FFFFFF] bg-clip-text text-transparent'> spaces</p>
                    <Group427Line />
                    <p className='w-[100%] lg:w-[466px] p-2 mx-auto text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
                {/*  */}
                <div className='sbst_child w-[95%] sm:w-[600px] h-[auto] p-[36px_2px_54px_2px] flex flex-col justify-between'>
                    <p className='text-[40px] font-normal leading-[52px] text-center uppercase bg-gradient-to-b from-[#D17DFF] via-[#D17DFF] to-[#FFFFFF] bg-clip-text text-transparent'>tipping, Collecting </p>
                    <Group427Line />
                    <p className='w-[100%] lg:w-[466px] p-2 mx-auto text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                </div>
            </div>

            {/* <div className="solpump_parent"> */}
            <div className="w-full h-[auto] md:h-[546px] lg:h-[746px] mx-auto mt-10 flex flex-col justify-between">
                <div className='s_p_child1 '>
                    {/* <p className='s_p_para1'>solpump’ Path to Success</p> */}
                    <p className='text-[34px] sm:text-[44px]  lg:text-[88px] font-normal lg:leading-[114.4px] text-center'>solpump’ Path to Success</p>
                    {/* <p className='s_p_para2' style={{ padding: '20px 0px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p> */}
                    <p className='"w-full lg:w-[856px] h-[42px] font-sora text-[10px] sm:text-[13px] lg:text-[16px] leading-[20.8px] text-center m-auto' style={{ padding: '20px 0px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>
                {/* <div className='s_p_child2 '> */}
                <div className='flex flex-col lg:flex-row gap-2 justify-center mt-[70px] md:mt-0'>
                    {/* <div className='s_p_child2_btns_parent flex sm:flex-row'> */}
                    <div className='s_p_child2_btns_parent flex flex-row flex-wrap justify-center gap-[10px] lg:flex-col w-full lg:w-[290px] rounded-[32px] '>
                        {['inception', 'establishment', 'expansion', 'evolution'].map((buttonName) => (
                            <button
                                key={buttonName}
                                className={`${activeButton === buttonName ? 'active p-6 rounded-[52px] bg-gradient-to-b from-[#1F1033] to-[#0B0313] border border-[#808080b3] font-normal text-[#DE6AFF] text-center relative w-[200px] lg:w-[234px] text-[15px] lg:text-[20px]' : 'w-[200px] lg:w-[234px]  h-[74px]  lg:p-6 rounded-[52px] border border-[#FFFFFF4D] bg-[#000000] text-[15px]  lg:text-[20px] font-normal cursor-pointer relative'}`}
                                onClick={() => handleButtonClick(buttonName)}
                            >
                                {buttonName}
                            </button>
                        ))}
                    </div>
                    <div className=' p-10  rounded-[32px] bg-gradient-to-b from-[#201034] to-[#090211] flex flex-col justify-center gap-8 w-full lg:w-[910px]'>
                        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                            <div className='bullet_gradient'></div>
                            <p >
                                {
                                    [
                                        { id: 'inception', content: 'Lorem Ipsum is simply dummy text of the simply dummy text of the' },
                                        { id: 'establishment', content: 'Lorem Ipsum is simply  text of simply dummy text of thesimply dummy text of the the' },
                                        { id: 'expansion', content: 'Lorem Ipsum is simply simply dummy text of dummy ipsum text of the' },
                                        { id: 'evolution', content: 'Lorem Ipsum simply dummy text of thesimply dummy text of the is  text of the' }
                                    ].map((e, i) => e.id === activeButton ? e.content : '')
                                }
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>)
}

export default UnlockingSec