import Image from 'next/image'
import React from 'react'

const Technology = () => {
	return (
		<div className='TechnologyPage text-white h-[100vh] absolute inset-0 z-0 pt-[160px] flex items-start justify-between pl-[165px]'>
			<div className="text-left">
				<p className="text-white text-[20px] font-normal leading-[25px] tracking-[3.72px] uppercase mb-[80px]"><span className="opacity-25 mr-[28px]">03</span>SPACE LAUNCH 101</p>
				<div className="flex items-center space-x-[45px]">
					<div className="space-y-[24px]">
						<span className='w-[80px] h-[80px] rounded-[50%] border-[1px] border-white flex items-center justify-center text-[#0B0D17] cursor-pointer text-[32px] leading-[37px] tracking-[2px] text-center font-normal bg-white'>1</span>
						<span className='w-[80px] h-[80px] rounded-[50%] border-[1px] border-white border-[rgba(255, 2555, 255, 20%)] flex items-center cursor-pointer justify-center text-[32px] leading-[37px] tracking-[2px] text-center font-normal bg-transparent text-white'>2</span>
						<span className='w-[80px] h-[80px] rounded-[50%] border-[1px] border-white border-[rgba(255, 2555, 255, 20%)] flex items-center cursor-pointer justify-center text-[32px] leading-[37px] tracking-[2px] text-center font-normal bg-transparent text-white'>3</span>
					</div>
					<div className="">
						<span className="mb-[12px] font-normal text-[16px] leading-[19px] tracking-[2.7px] text-[#D0D6F9] uppercase">THE TERMINOLOGY…</span>
						<h2 className="text-white text-[56px] leading-[64px] uppercase mb-[17px] font-normal">LAUNCH VEHICLE</h2>
						<p className="w-[444px] text-[18px] leading-[28px] font-normal text-[#D0D6F9]">A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
					</div>
				</div>
			</div>
			<Image className='technologyImg' src={"/Images/TechnologyImg.jpeg"} alt="jet img" width={390} height={390} />
		</div>
	)
}

export default Technology
