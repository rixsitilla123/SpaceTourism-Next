import React from 'react'

const Home = () => {
	return (
		<div className='HomePage flex items-end justify-between h-[100vh] absolute inset-0 z-0 text-white pl-[165px] pb-[100px] pr-[77px]'>
			<div className="w-[460px] text-left space-y-[25px]">
				<span className="text-[#d0d6f9] text-[24px] leading-[27px]">SO, YOU WANT TO TRAVEL TO</span>
				<h1 className="text-white text-[150px] leading-[100px] font-['Bellefair']">SPACE</h1>
				<p className="text-[#D0D6F9] text-[18px] leading-[32px]">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
			</div>
			<div className="relative right-[77px] pl-[88px]">
				<div className="uppercase HomeSpan1 text-[#0B0D17] text-[32px] leading-[37px] tracking-[2px]">Explore</div>
				<div className="HomeSpan2 absolute top-[-0.5%]"></div>
			</div>
		</div>
	)
}

export default Home