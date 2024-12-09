import Image from 'next/image'
import React from 'react'

const Crew = () => {
	return (
		<div className='CrewPage text-white h-[100vh] flex items-start justify-between absolute inset-0 z-0 pt-[150px] px-[165px]'>
			<div className="w-[485px] text-left">
				<p className="text-white text-[20px] font-normal leading-[25px] tracking-[3.72px] uppercase mb-[100px]"><span className="opacity-25 mr-[28px]">02</span>Meet your crew</p>
				<span className="mb-[15px] text-[28px] font-normal leading-[33px] uppercase opacity-50 text-white">Commander</span>
				<h2 className="mb-[22px] text-white text-[46px] leading-[56px] font-normal uppercase">Douglas Hurley</h2>
				<p className="mb-[80px] text-[16px] font-normal text-[#D0D6F9] leading-[30px]">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
				<div className="flex items-center space-x-[24px]">
					<span className="w-[15px] h-[15px] rounded-[50%] bg-white cursor-pointer"></span>
					<span className="w-[15px] h-[15px] rounded-[50%] bg-white cursor-pointer opacity-20"></span>
					<span className="w-[15px] h-[15px] rounded-[50%] bg-white cursor-pointer opacity-20"></span>
					<span className="w-[15px] h-[15px] rounded-[50%] bg-white cursor-pointer opacity-20"></span>
				</div>
			</div>
			<Image className='crewImg' src={"/Images/CrewImg.png"} alt="person img" width={400} height={500}/>
		</div>
	)
}

export default Crew