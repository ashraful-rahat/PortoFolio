import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiReact, SiTailwindcss } from 'react-icons/si';
import { Typewriter } from 'react-simple-typewriter';
import bannerImg from '/images/mypic.jpg';

const Banner = () => {
    return (
        <div style={{ backgroundColor: "rgb(32, 37, 40)" }}>
            <div className="w-11/12 mx-auto">
                <section id="home" className="pt-10 pb-20 w-full flex flex-col-reverse md:flex-row items-center border-b-[1px] border-b-black">
                    {/* Image Section */}
                    <div className="w-full flex justify-center items-center mb-8 md:mb-0 relative md:w-1/2 order-1 md:order-none">
                        <img
                            src={bannerImg}
                            className="w-[380px] sm:w-[300px] md:w-[350px] lg:w-[370px] xl:w-[600px] h-auto md:h-[550px] lg:h-[550px] z-10 -mt-16 lg:-mt-24 md:-mt-32"
                            alt="Banner"
                        />
                        <div className="absolute bottom-0 w-[330px] sm:w-[200px] md:w-[300px] lg:w-[350px] h-[320px] sm:h-[200px] md:h-[340px] lg:h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center z-0"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full flex flex-col gap-8 md:w-1/2">
                        <div className="flex flex-col gap-4">
                            <h4 className="text-lg font-normal text-gray-400">WELCOME TO MY WORLD</h4>
                            <h1 className="text-3xl md:text-5xl font-bold text-white">
                                Hi I&#39;m{" "}
                                <span className="capitalize" style={{ color: "rgb(234, 0, 80)" }}>Ashraful Rahat</span>
                            </h1>
                            <h2 className="text-xl md:text-2xl font-semibold text-white">
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
                            <p className="text-gray-400 font-lato leading-6 tracking-wide">
                                Passionate developer with experience in both front-end and back-end technologies.
                                Constantly learning and growing to stay updated with the latest trends in technology.
                            </p>
                        </div>

                     {/* Buttons Section */}
<div className="flex flex-col md:flex-row md:justify-between gap-6">
  {/* FIND ME IN Section */}
  <div className="flex flex-col items-center w-full md:w-1/2">
    <h2 className="text-gray-400 font-sans mb-4">FIND ME IN</h2>
    <div className="flex gap-4">
      <span className="bannerIcon">
        <FaFacebook />
      </span>
      <span className="bannerIcon">
        <FaLinkedin />
      </span>
      <span className="bannerIcon">
        <FaInstagram />
      </span>
    </div>
  </div>

  {/* BEST SKILL ON Section */}
  <div className="flex flex-col items-center w-full md:w-1/2">
    <h2 className="text-gray-400 font-sans mb-4">BEST SKILL ON</h2>
    <div className="flex gap-4">
      <span className="bannerIcon">
        <SiTailwindcss />
      </span>
      <span className="bannerIcon">
        <SiReact />
      </span>
      <span className="bannerIcon">
        <SiExpress />
      </span>
      <span className="bannerIcon">
        <SiMongodb />
      </span>
    </div>
  </div>
</div>


                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
