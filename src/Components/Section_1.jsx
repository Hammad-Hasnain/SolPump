import React, { useState } from 'react'
import './section_1.css'
import Arrow from './Arrow'
import rotated_arrow from '../assets/rotated_arrow.png'
import processor from '../assets/processor.png'
import Group427Line from './Group427Line'
import Footer from './Footer'
import CircleGradient from './CircleGradient'
import PotraitGradient from './PotraitGradient'
import Box_shadow from './Box_shadow'
import LightningComp from './LightningComp'
import FooterGradient from './FooterGradient'
import Scanner from './Scanner'


const Section_1 = () => {
    const [activeButton, setActiveButton] = useState('inception');
    const [activeButtonArr, setActiveButtonArr] = useState([
        { id: 'inception', content: 'Lorem Ipsum is simply dummy text of the' },
        { id: 'establishment', content: 'Lorem Ipsum is simply dummy text of the' },
        { id: 'expansion', content: 'Lorem Ipsum is simply dummy text of the' },
        { id: 'evolution', content: 'Lorem Ipsum is simply dummy text of the' }
    ]);




    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };



    return (
        <div style={{ color: 'white', }}>
            <div className='onchain_parent' style={{ position: 'relative', }}>
                <div className='py-[90px]' >
                    <div style={{ paddingBottom: '160px' }}>
                        <div >
                            {/* <button className='game_btn'>game</button> */}
                            <button className="px-[36px] py-[24px] mb-[16px] rounded-[44px] bg-white text-[#120D16] text-[32px] font-bold">game</button>
                        </div>
                        {/*  */}
                        <div>
                            {/* <svg width="0" height="0">
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: "#feb47b", stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg> */}
                            <p className=' onchain_title ' >THE ONCHAIN</p>
                        </div>
                        {/*  */}
                        <div>
                            {/* <svg width="0" height="0">
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: "#ff7e5f", stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: "#feb47b", stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg> */}
                            <p className='solana_title'>SOLANA PREDICTING</p>
                        </div>

                    </div>
                    {/* <div className='ellipse_3625'>

                </div> */}
                    {/* <div style={{ display: 'flex', justifyContent: 'space-around', position: 'relative', zIndex: '2' }}> */}
                    <div className='flex justify-around relative z-20'>
                        {/* <p className='dummy_content_p'> */}
                        <p className='font-sora text-base font-normal leading-5 text-white max-w-[380px]'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 40 }}> */}
                        <div className='flex justify-center items-center gap-10'>
                            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}> */}
                            <div className='flex justify-center items-center gap-5'>
                                <p className='text-[40px]'>DEX tools
                                </p>
                                <Arrow />
                            </div>
                            <div className='flex justify-center items-center gap-5'>
                                <p className='text-[40px]'>RAYDIUM </p>
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
            </div>

            <div >
                <div className="w-full h-[1170px]">
                    <p className="text-[88px] font-normal leading-[114.4px] text-center">
                        Bridging digital worlds the power of connection</p>
                    <p className="w-[856px] h-[42px] font-sora text-[16px] font-normal leading-[20.8px] text-center m-auto">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                    <div className="flex justify-center items-center w-full h-[750px] rounded-[422.79px] border border-[#80808038] relative">
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
                                                    <div className='b_p_btn_ellipse' style={{ position: 'absolute', top: '28%', left: '-10%', opacity: '0.5' }}></div>
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


            <div className='relative'>
                <PotraitGradient style={{ position: 'absolute', top: '50%', left: '22%', transform: ' translateX(-50%)' }} />
                <div className="unlocking_parent" style={{ marginBottom: '50px' }} >
                    <p className='u_p_para1'>Unlocking solpump essentials</p>
                    <p className='u_p_para2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                </div>

                <div className="sbst_parent">
                    <div className='sbst_child'>
                        <p className='sbst_child_title'>SOL IO </p>
                        <Group427Line />
                        <p className='sbst_child_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    </div>
                    {/*  */}
                    <div className='sbst_child'>
                        <p className='sbst_child_title'>bonds </p>
                        <Group427Line />
                        <p className='sbst_child_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    </div>
                    {/*  */}
                    <div className='sbst_child'>
                        <p className='sbst_child_title'> spaces</p>
                        <Group427Line />
                        <p className='sbst_child_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    </div>
                    {/*  */}
                    <div className='sbst_child'>
                        <p className='sbst_child_title'>tipping,Collecting </p>
                        <Group427Line />
                        <p className='sbst_child_desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
                    </div>
                </div>

                <div className="solpump_parent">
                    <div className='s_p_child1'>
                        <p className='s_p_para1'>solpump’ Path to Success</p>
                        <p className='s_p_para2' style={{ padding: '20px 0px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    </div>
                    <div className='s_p_child2'>
                        <div className='s_p_child2_btns_parent'>
                            {['inception', 'establishment', 'expansion', 'evolution'].map((buttonName) => (
                                <button
                                    key={buttonName}
                                    className={`${activeButton === buttonName ? 'active' : 's_p_child2_btn'}`}
                                    onClick={() => handleButtonClick(buttonName)}
                                >
                                    {buttonName}
                                </button>
                            ))}
                        </div>
                        <div className='s_p_child2_desc_parent'>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div className='bullet_gradient'></div>
                                <p>
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
            </div>

            {/* ========================================================================================= */}
            <div className='understanding_parent'>
                <div className="und_p_child1">
                    <p className='und_p_child1_title'>uNDERSTANDING THE solpumpSECONOMY</p>
                    <div>
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
                <div className='und_p_child2'>
                    <div className='relative' style={{ width: '100%', height: 'inherit', display: 'flex', justifyContent: 'center', }}>

                        {/* scanner start */}
                        <Scanner />
                        {/* scanner end */}


                        <div className='w-[480px] h-[101px] p-[20px] px-[24px] rounded-[72px] mb-[70px] bg-custom-gradient' >
                            <p className="font-sora text-[14px] font-normal text-center text-[#FFFFFF80]">Name</p>
                            <p className='text-2xl font-normal text-center text-white'>solpump</p>
                        </div>

                        <div className='w-[402px] h-[406px] relative'>
                            <img src={processor} alt="processor_img" width={'100%'} />
                            {/* left */}
                            <div className='w-[564px] h-[552px]  absolute top-[-20%] left-[-20%] opacity-50'
                                style={{ background: 'radial-gradient(50% 50% at 50% 50%, #9D70FF 0%, rgba(137, 62, 174, 0) 100%)' }}
                            ></div>
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient absolute top-0 -left-3/4'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Raydium LP</p>
                                <p className='text-2xl font-normal text-center text-white'>i5%</p>
                            </div>
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient absolute top-[40%] left-[-80%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Marketing</p>
                                <p className='text-2xl font-normal text-center text-white'>i5%</p>
                            </div>
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient absolute  top-[80%] -left-3/4'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>CEX listing</p>
                                <p className='text-2xl font-normal text-center text-white'>5%</p>
                            </div>
                            {/* right */}
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient absolute top-0 -right-3/4'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Symbol</p>
                                <p className='text-2xl font-normal text-center text-white'>$FRIENDS</p>
                            </div>
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient absolute top-[40%] -right-[80%]'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Supply</p>
                                <p className='text-2xl font-normal text-center text-white'>1o,ooo,ooo</p>
                            </div>
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient absolute top-[80%] -right-3/4'>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Presale</p>
                                <p className='text-2xl font-normal text-center text-white'>5o%</p>
                            </div>
                        </div>
                        {/*  */}
                        <div className='w-[402px] rounded-[44px] flex justify-between mt-[80px]' >
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient '>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Development</p>
                                <p className='text-2xl font-normal text-center text-white'>io%</p>
                            </div>
                            <div className='p-[20px] pr-[24px] pb-[20px] pl-[24px] rounded-[52px] mb-[70px] bg-custom-gradient '>
                                <p className='font-sora text-[14px] font-normal text-center text-[#FFFFFF80]'>Advisors/KOLs</p>
                                <p className='text-2xl font-normal text-center text-white'>5%</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>



            <div className='w-full h-[715px] rounded-[40px] bg-[#0A0B0D] flex flex-col p-[30px_10px] overflow-hidden relative'>
                <>
                    <div className="w-fit h-[334px] m-auto flex flex-col relative z-[4]" >
                        <p className='text-[88px]  leading-[114.4px] text-center'>ready when you are</p>
                        <div className='w-fit m-auto'>
                            <p className='text-[44px] leading-[44px]'>join community</p>
                            <div className='flex justify-center mt-4'>
                                <Arrow />
                            </div>
                        </div>
                    </div>

                    <div>
                        <Footer />
                    </div>
                </>

                <div className='w-full flex justify-center'>
                    <FooterGradient />
                </div>
            </div>
        </div >
    )
}

export default Section_1