import React, { useState } from 'react'
import logo from './../assets/Images/logo.png'
import {
    HiHome,
    HiMagnifyingGlass,
    HiStar,
    HiPlayCircle,
    HiTv
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';
function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv
        }
    ]
    return (
        <div className='flex items-center justify-between p-3 sm:p-4 md:px-8 lg:px-12 xl:px-16'>
            <div className='flex gap-4 sm:gap-6 lg:gap-8 items-center'>
                <img src={logo} className='w-[75px] sm:w-[95px] md:w-[115px] lg:w-[130px] object-cover shrink-0' />
                <div className='hidden md:flex gap-4 lg:gap-8 items-center'>
                    {menu.map((item) => (
                        <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                    ))}
                </div>
                <div className='flex md:hidden gap-3 sm:gap-5 items-center'>
                    {menu.map((item, index) => index < 3 && (
                        <HeaderItem key={item.name} name={''} Icon={item.icon} />
                    ))}
                    <div className='md:hidden relative' onClick={() => setToggle(!toggle)}>
                        <HeaderItem name={''} Icon={HiDotsVertical} />
                        {toggle ? <div className='absolute right-0 sm:left-0 sm:right-auto mt-3 z-50 bg-[#121212] border-[1px] border-gray-700 px-4 py-3 rounded-md shadow-xl flex flex-col gap-2 min-w-[150px]'>
                            {menu.map((item, index) => index > 2 && (
                                <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
                            ))}
                        </div> : null}
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[32px] h-[32px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] rounded-full object-cover shrink-0' />
        </div>
    )
}

export default Header