import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiReact, SiTailwindcss } from 'react-icons/si'; // Import icons for Tailwind, React, Express, and MongoDB
import { Typewriter } from 'react-simple-typewriter';
import bannerImg from '/images/mypic.jpg';
const Banner = () => {
    return (
        <div style={{ backgroundColor: "rgb(32, 37, 40)" }} className='absolute'>
            <section id='home' className="  pt-3 pb-20 flex items-center border-b-[1px] border-b-black w-11/12 mx-auto">
                <div className='w-1/2 flex flex-col gap-16'>
                    <div className='flex flex-col gap-5'>
                        <h4 className="text-lg font-normal text-gray-400">WELCOME TO MY WORLD</h4>
                        <h1 className="text-5xl font-bold text-white">
                            Hi I&#39;m {""}
                            <span className="capitalize" style={{ color: "rgb(234, 0, 80)" }}>Ashraful Rahat</span>
                        </h1>
                        {/* Add the typewriter effect */}
                        <h2 className="text-2xl font-semibold text-white mt-4">
                            <Typewriter
                                words={["a MERN Stack Developer", "a UI Designer", "a Passionate Coder"]}
                                loop
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h2>
                        <p className='text-gray-400 font-lato leading-6 tracking-wide'>Passionate developer with experience in both front-end and back-end technologies.Constantly learning and growing to stay updated with the latest trends in technology.</p>
                    </div>
                    <div className='flex justify-between'>
            {/* FIND ME IN Section */}
            <div className='flex flex-col'>
                <h2 className='text-gray-400 font-sans mb-4'>FIND ME IN</h2>
                <div className='flex gap-4'>
                    <span className='bannerIcon'>
                        <FaFacebook />
                    </span>

                    <span className='bannerIcon'>
                        <FaLinkedin />
                    </span>

                    <span className='bannerIcon'>
                        <FaInstagram />
                    </span>
                </div>
            </div>

            {/* BEST SKILL ON Section */}
            <div className='flex flex-col'>
                <h2 className='text-gray-400 font-sans mb-4'>BEST SKILL ON</h2>
                <div className='flex gap-4'>
                    {/* Tailwind Icon */}
                    <span className='bannerIcon'>
                        <SiTailwindcss />
                    </span>

                    {/* React Icon */}
                    <span className='bannerIcon'>
                        <SiReact />
                    </span>

                    {/* Express Icon */}
                    <span className='bannerIcon'>
                        <SiExpress />
                    </span>

                    {/* MongoDB Icon */}
                    <span className='bannerIcon'>
                        <SiMongodb />
                    </span>
                </div>
            </div>
        </div>
                </div>


                <div className="w-1/2 flex justify-center items-center relative -top-20">
  {/* Image */}
  <img src={bannerImg} className="w-[650px] h-[600px] z-10" alt="Banner" />
  
  {/* Gradient Overlay with large built-in shadow */}
  <div className="absolute bottom-0 w-[380px] h-[380px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center z-0"></div>
</div>

            </section>
        </div>
    );
};

export default Banner;