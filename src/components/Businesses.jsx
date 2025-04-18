import React from 'react'
import group from '../assets/images/png/group.png';
import star from '../assets/images/svg/star.svg'

const Businesses = () => {
    return (
        <div>
            <section id='businesses' className="bg-[#f4f8ff] xl:py-20 lg:py-2 ">
                <div className='relative max-w-[1920px] mx-auto'>
                    <div className="container mx-auto px-4 xl:my-24 lg:my-16">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                            <div className="lg:w-1/2 w-full max-sm:mt-4">
                                <div className="lg:absolute lg:top-1/2 lg:left-0 transform lg:-translate-y-1/2 xl:pt-8 xl:pb-8 lg:py-0 md:pt-8 lg:w-1/2">
                                    <img src={group} alt="hero-img" className="w-[680px] h-full object-cover" />
                                </div>
                            </div>
                            <div className="w-full lg:w-[45%] text-center md:text-left">
                                <h2 className="md:text-[45px] text-3xl font-medium text-black mb-4 ff-poppins leading-[128%] lg:w-[433px]">
                                    Perfect Solution for Small Businesses
                                </h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Pricing plans that fit like a glove.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 lg:mb-12 mb-8  justify-left lg:justify-start xl:mb-24">
                                    <button className="text-[#1E71FF] cursor-pointer rounded-full border border-[#1E71FF] px-11 py-[14px] text-sm font-medium transition-all duration-300 hover:bg-[#1E71FF] hover:text-white hover:scale-105">
                                        Try it Free
                                    </button>
                                    <button className="cursor-pointer text-[#1E71FF] rounded-full border border-[#1E71FF] px-10 py-[14px] text-sm font-medium transition-all duration-300 hover:bg-[#1E71FF] hover:text-white hover:scale-105">
                                        Get a Demo
                                    </button>
                                </div>
                                <div className="w-[167px] h-px bg-gray-300 lg:mb-11 mb-8"></div>
                                <div className="flex items-center gap-8 md:justify-left lg:justify-start mb-4">
                                    <img src={star} alt="stars" className="w-32" />
                                    <p className="text-gray-700 text-base w-[240px]">
                                        <span className="font-bold">5,200 businesses</span> use ChatApp and they rate it as{' '}
                                        <span className="font-bold">5-stars.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </section>
        </div>
    )
}

export default Businesses
