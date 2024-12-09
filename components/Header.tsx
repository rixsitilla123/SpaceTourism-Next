"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface INavbarItem {
	id: number,
	count: string,
	title: string,
	path: string
}

const Header = () => {
	const path = usePathname()
	const navbarItem: INavbarItem[] = [
		{
			id: 1,
			count: "00",
			title: "Home",
			path: "/"
		}, {
			id: 2,
			count: "01",
			title: "Destination",
			path: "/destination"
		}, {
			id: 3,
			count: "02",
			title: "Crew",
			path: "/crew"
		}, {
			id: 4,
			count: "03",
			title: "Tehnology",
			path: "/technology"
		},
	]
	return (
		<div className="flex items-center justify-between mt-[40px] ml-[55px] absolute inset-0 top-[40px] z-10">
			<Link href={"/"}><Image src={"/SiteLogo.svg"} alt="logo" width={40} height={40} /></Link>
			<div className="flex items-center relative">
				<span className='h-[1px] w-[370px] absolute z-10 left-[-330px] inline-block opacity-[0.25] bg-[#fff]'></span>
				<div className='flex items-center z-0 gap-[50px] backdrop-blur-[81.55px] pl-[100px] pr-[118px] bg-[rgba(255,255,255,0.04)]'>
					{navbarItem.map(item => (
						<Link href={item.path} className={`flex items-center gap-[12px] pt-[40px] pb-[39px] duration-500 border-b-[1px] border-transparent ${item.path == path ? "border-white" : " border-transparent"}`} key={item.id}>
							<strong className='text-[16px] text-white font-bold tracking-[2.7px] leading-[19px]'>{item.count}</strong>
							<span className='text-[16px] text-white font-normal tracking-[2.7px] leading-[19px] uppercase'>{item.title}</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Header