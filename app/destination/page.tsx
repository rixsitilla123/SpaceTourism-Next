import Image from 'next/image'
import React from 'react'

const Destination = () => {
	return (
		<div className='DestinationPage text-white h-[100vh] absolute inset-0 z-0 flex items-center justify-between px-[165px]'>
			<div className="pt-[150px]">
				<h2 className="text-white text-[20px] font-normal leading-[25px] tracking-[3.72px] uppercase mb-[45px]"><span className="opacity-25 mr-[28px]">01</span>Pick your destination</h2>
				<Image src={"/Images/DestinationImg.png"} alt="planet" width={370} height={370} />
			</div>
			<div className="w-[445px] text-left pt-[100px]">
				<div className="flex items-center space-x-[35px] mb-[40px]">
					<span className='text-white text-[16px] font-noral leading-[19px] tracking-[2.7px] uppercase pb-[12px] cursor-pointer border-b-[1px] border-white'>moon</span>
					<span className='text-white text-[16px] font-noral leading-[19px] tracking-[2.7px] uppercase pb-[12px] cursor-pointer'>mars</span>
					<span className='text-white text-[16px] font-noral leading-[19px] tracking-[2.7px] uppercase pb-[12px] cursor-pointer'>europa</span>
					<span className='text-white text-[16px] font-noral leading-[19px] tracking-[2.7px] uppercase pb-[12px] cursor-pointer'>titan</span>
				</div>
				<h2 className="text-white text-[100px] leading-[80px] font-normal uppercase mb-[14px]">MOON</h2>
				<p className="text-[#D0D6F9] text-[18px] font-noraml leading-[32px] mb-[50px]">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
				<hr />
				<div className="flex items-center justify-between mt-[28px]">
					<div className="text-left">
						<span className="text-[#D0D6F9] text-[14px] font-normal leading-[17px] tracking-[2.36px] uppercase mb-[12px]">AVG. DISTANCE</span>
						<p className="text-white text-[28px] font-normal leading-[32px] uppercase">384,400 km</p>
					</div>
					<div className="text-left">
						<span className="text-[#D0D6F9] text-[14px] font-normal leading-[17px] tracking-[2.36px] uppercase mb-[12px]">Est. travel time</span>
						<p className="text-white text-[28px] font-normal leading-[32px] uppercase">3 days</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Destination