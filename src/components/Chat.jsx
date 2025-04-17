import React from 'react';
import mockup from '../assets/images/png/mockup.png';

const ChatSection = () => {
    return (
        <div>
            <section id='chat' className="lg:pt-24 pt-8 md:pt-14 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center text-center mb-3">
                        <h2 className="text-[45px] md:text-4xl font-medium text-black mb-4 ff-poppins">
                            Instant Team Chats
                        </h2>
                        <p className="text-gray-700 text-lg font-normal leading-[162%]">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                            <br className="hidden md:block" />
                            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                            <br className="hidden md:block" />
                            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            <br className="hidden md:block" />
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                            <br className="hidden md:block" />
                            Nulla consequat massa.
                        </p>
                    </div>
                    <div className='w-[1061px'>
                        <img src={mockup} alt="mockup" className="w-full" />
                   </div>
                </div>
            </section>
        </div>
    );
};

export default ChatSection;
