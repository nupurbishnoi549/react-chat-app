import React, { useState, useEffect } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    return (
        <header className="w-full fixed top-0 left-0 z-10 bg-[#1E71FF] py-2">
            <nav className="container mx-auto flex justify-between items-center px-3 h-[50px]">
                <h2 className="text-white text-2xl font-semibold">
                    chat<span className="font-light">app</span>
                </h2>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col justify-center items-center cursor-pointer z-20"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <span className="text-white text-5xl ">&times;</span>
                    ) : (
                        <>
                            <span className="block w-6 h-[3px] bg-white mb-[6px]"></span>
                            <span className="block w-6 h-[3px] bg-white mb-[6px]"></span>
                            <span className="block w-6 h-[3px] bg-white"></span>
                        </>
                    )}
                </button>

                <ul className="hidden md:flex gap-8 items-center">
                    <li><a href="#hero" className="text-white text-sm font-medium">Product</a></li>
                    <li><a href="#chat" className="text-white text-sm font-medium">Services</a></li>
                    <li><a href="#businesses" className="text-white text-sm font-medium">Contact</a></li>
                    <li><a href="#footer" className="text-white text-sm font-medium">Log In</a></li>
                    <li>
                        <button className="bg-[#4B8DFF] cursor-pointer text-white rounded-full px-6 py-3 text-sm font-medium">
                            Try It Free
                        </button>
                    </li>
                </ul>
            </nav>

            <div
                className={`fixed top-0 left-0 w-full min-h-screen bg-[#1E71FF] px-6 pt-[60px] transition-all duration-300 z-10 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
            >
                <ul className="flex flex-col gap-4 items-center justify-center mt-28">
                    <li><a href="#" className="text-white text-base font-medium py-2 block">Product</a></li>
                    <li><a href="#" className="text-white text-base font-medium py-2 block">Services</a></li>
                    <li><a href="#" className="text-white text-base font-medium py-2 block">Contact</a></li>
                    <li><a href="#" className="text-white text-base font-medium py-2 block">Log In</a></li>
                    <li>
                        <button className="bg-[#4B8DFF] text-white rounded-full px-6 py-3 text-sm font-medium w-full mt-2">
                            Try It Free
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
