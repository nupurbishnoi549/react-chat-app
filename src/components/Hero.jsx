import React from 'react';
import hero from '../assets/images/png/hero-img.png'
import Header from './common/Header';
import CustomBtn from './common/CustomBtn';

const HeroSection = () => {
    return (
        <section id='hero' className="lg:min-h-screen 2xl:min-h-fit flex flex-col items-center bg-[#1E71FF]">
          <Header/>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-3 md:py-12 py-8 mt-24">
                <div className="mb-12 text-center md:text-left">
                    <h2 className="text-white text-[35px] md:text-[75px]  md:w-[499px] w-full font-semibold mb-6 leading-[128%]">Have your best chat</h2>
                    <p className="text-white text-xl mb-12">Fast, easy & unlimited team chat.</p>
                    <div className="flex flex-col md:flex-row gap-9 justify-center md:justify-start">
                        <CustomBtn text=" Try it Free" myClass=""/>
                       
                        <CustomBtn text="  Get a Demo" myClass="" />
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
