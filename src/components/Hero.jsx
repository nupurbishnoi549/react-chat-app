import React from 'react';
import hero from '../assets/images/png/hero-img.png'
import Header from './common/Header';

const HeroSection = () => {
    return (
        <section id='hero' className="lg:min-h-screen 2xl:min-h-fit flex flex-col items-center bg-[#1E71FF]">
          <Header/>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-3 md:py-12 py-8 mt-24">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-white text-[35px] md:text-[75px]  md:w-[499px] w-full font-semibold mb-6 leading-[128%]">Have your best chat</h2>
                    <p className="text-white text-xl mb-12">Fast, easy & unlimited team chat.</p>
                    <div className="flex flex-col md:flex-row gap-9 justify-center md:justify-start">
                        <button className="text-white cursor-pointer rounded-full border-2 border-white px-12 py-4 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#1E71FF] hover:scale-105">
                            Try it Free
                        </button>
                        <button className="bg-[#1E71FF] cursor-pointer text-white rounded-full border-2 px-12 py-4 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-[#1E71FF] hover:scale-105">
                            Get a Demo
                        </button>
                    </div>

                </div>
                <div className="w-full md:w-[585px]">
                    <img src={hero} alt="hero-img" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
