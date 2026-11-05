import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-2 lg:gap-3
    text-[13px] md:text-[14px] lg:text-[15px] xl:text-[16px] font-semibold cursor-pointer hover:underline
    underline-offset-8 whitespace-nowrap py-1'>
        <Icon className="text-[18px] sm:text-[20px] shrink-0"/>
        {name ? <h2>{name}</h2> : null}
    </div>
  )
}

export default HeaderItem