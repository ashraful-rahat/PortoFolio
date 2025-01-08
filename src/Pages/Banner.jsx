import { motion } from 'framer-motion';
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
                    <div className="w-full flex items-center mb-8 md:mb-0 relative md:w-1/2 order-1 md:order-none">
                        {/* Image with higher z-index */}
                        <motion.img
                            src={bannerImg}
                            className="w-[380px] sm:w-[300px] md:w-[300px] lg:w-[500px] xl:w-[650px] h-auto md:h-[550px] lg:h-[550px] z-20 -mt-16 lg:-mt-24 lg:-ml-6 md:-mt-32 ml-8"
                            alt="Banner"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeIn" }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                        {/* Overlay with motion animation */}
                        <motion.div
                            className="absolute bottom-0 w-[330px] sm:w-[200px] md:w-[270px] lg:w-[360px] xl:w-[500px] xl:ml-28 h-[320px] sm:h-[200px] md:h-[340px] lg:h-[350px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center z-10 lg:ml-14 ml-14"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 2, ease: 'linear' }}
                        >
                            {/* Content inside overlay */}
                        </motion.div>
                    </div>

                    {/* Content Section with framer-motion */}
                    <div className="w-full flex flex-col gap-8 md:w-1/2 mt-14">
                        <motion.div
                            className="flex flex-col gap-4"
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                        >
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
                        </motion.div>

                        {/* Buttons Section */}
                        <div className="flex flex-col md:flex-row md:justify-between gap-6">
                            {/* FIND ME IN Section */}
                            <motion.div
                                className="flex flex-col items-center w-full md:w-1/2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.3 }}
                            >
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
                            </motion.div>

                            {/* BEST SKILL ON Section */}
                            <motion.div
                                className="flex flex-col items-center w-full md:w-1/2"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.5 }}
                            >
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
                            </motion.div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Banner;
