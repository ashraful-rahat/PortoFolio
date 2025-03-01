"use client"
import { motion } from "framer-motion"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa"
import { MdEmail, MdSmartphone } from "react-icons/md"

const Contact = () => {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-8" style={{ backgroundColor: "rgb(32, 37, 40)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase tracking-widest text-teal-400 mb-4">Get in Touch</h2>
          <motion.h1
  className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 bg-clip-text text-transparent"
  data-aos="fade-right"
  data-aos-duration="1700"
  data-aos-easing="ease-in-out"
>
  Let&lsquo;s Connect
</motion.h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto mt-4 rounded-full"

            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-[#1a1e21] rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-100 mb-8">Contact Information</h3>
              
              <motion.div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-800 rounded-xl group"
                >
                  <div className="p-3 bg-teal-400/10 rounded-lg mr-4">
                    <MdEmail className="text-3xl text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-gray-100">spinball61@gmail.com</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-800 rounded-xl group"
                >
                  <div className="p-3 bg-blue-400/10 rounded-lg mr-4">
                    <MdSmartphone className="text-3xl text-blue-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-gray-100">+880 1867559512</p>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-800 rounded-xl group"
                >
                  <div className="p-3 bg-purple-400/10 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-3xl text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-gray-100">Dhaka, Bangladesh</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Social Links */}
              <div className="mt-8 flex space-x-4">
              <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.facebook.com/rayhan.rifa.3"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-teal-400/10 transition-colors"
                >
                  <FaFacebook className="text-2xl text-gray-400 hover:text-teal-400" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/ashraful-rahat"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-teal-400/10 transition-colors"
                >
                  <FaInstagram className="text-2xl text-gray-400 hover:text-teal-400" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/ashraful-rahat"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-teal-400/10 transition-colors"
                >
                  <FaGithub className="text-2xl text-gray-400 hover:text-teal-400" />
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://www.linkedin.com/in/ashraful-rahat-a74457278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="p-3 bg-gray-800 rounded-lg hover:bg-blue-400/10 transition-colors"
                >
                  <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-400" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#1a1e21] rounded-2xl p-8 border border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-gray-100 mb-8">Send a Message</h3>
            
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  placeholder="Enter Your Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-gray-400 mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                  placeholder="Enter Your Email Address"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-gray-400 mb-2">Message</label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-gradient-to-r from-teal-400 to-blue-500 text-gray-900 font-semibold rounded-lg flex items-center justify-center space-x-2"
                type="submit"
              >
                <FaPaperPlane className="text-xl" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

 
        
      </div>
    </div>
  )
}

export default Contact