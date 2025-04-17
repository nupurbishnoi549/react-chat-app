import React from 'react'
import { helpLinks, featuresLinks, companyLinks, contactLinks } from '../utils/helper'

const Footer = () => {
    return (
        <footer id='footer' className="md:py-16 pt-10 pb-8 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <div className="lg:w-1/4">
                        <h2 className="text-3xl font-bold text-[#1E71FF]">
                            chat<span className="font-light">app</span>
                        </h2>
                        <p className="mt-4 text-[#2B353EB2] text-base font-normal">
                            The last team chat you<br /> will ever need.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-y-8 w-full lg:w-3/4">
                        <div className="w-1/2 md:w-1/3 lg:w-1/4">
                            <ul>
                                <li className="text-lg font-normal text-[#2B353E] mb-3">Help</li>
                                {helpLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-600 font-normal text-[13px] hover:text-black block mb-2">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    <div className="w-1/2 md:w-1/3 lg:w-1/4">
                        <ul>
                                <li className="text-lg font-normal text-[#2B353E] mb-3">Features</li>
                            {featuresLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="text-gray-600 font-normal text-[13px] hover:text-black block mb-2">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-1/4">
                            <ul>
                                <li className="text-lg font-normal text-[#2B353E] mb-3">Company</li>
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href="#" className="text-gray-600 font-normal text-[13px] hover:text-black block mb-2">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-1/4">
                            <ul>
                                <li className="text-lg font-normal text-[#2B353E] mb-3">Contact Us</li>
                                {contactLinks.map((link, index) => (
                                    <li key={index} className='max-w-[168px]'>
                                        {link.href ? (
                                            <a href={link.href} className="text-gray-600 font-normal text-[13px] hover:text-black block mb-2">
                                                {link.text}
                                            </a>
                                        ) : (
                                            <span className="text-gray-600">{link.text}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <p className="text-gray-500 text-sm md:mt-16 mt-10 items-left">
                    © Copyright ChatApp Inc.
                </p>
            </div>
        </footer>
    )
}

export default Footer
