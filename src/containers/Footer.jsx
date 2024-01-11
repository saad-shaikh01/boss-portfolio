import React from 'react'
import { SecondaryText } from '../components/Text'
function Footer() {
    return (
        <div className='bg-[black] py-4 md:py-20'>

            <div className='container mx-auto flex md:flex-nowrap flex-wrap gap-4 justify-between text-sm'>

                <SecondaryText title={<span className="text-[10px] text-white md:text-sm lg:text-[18px] font-semibold"> Copyright © 2024
                    <span className="your-custom-style ml-2 text-dark-primary cursor-pointer hover:border-none ease-in-out duration-300 border-b border-dark-primary">
                        Ahsan Akram </span>. All Rights Reserved.</span>} />

                <SecondaryText title={<span className="text-[10px] text-white md:text-sm lg:text-[18px] font-semibold"> Developed By
                    <span className=" ml-2 your-custom-style text-dark-primary cursor-pointer hover:border-none ease-in-out duration-300 border-b border-dark-primary">
                        AsmatechGlobal </span></span>} />

            </div>

        </div>
    )
}
export default Footer
