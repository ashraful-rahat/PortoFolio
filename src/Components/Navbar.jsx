import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="py-6 px-4 backdrop-blur-md bg-[#202528] border-b border-gray-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="flex items-center space-x-4">
          {/* Left side text animation */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-gray-400 text-sm"
          >
            Welcome to the
          </motion.div>

          {/* Main name with animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
          >
            Ashraful Rahat
          </motion.div>

          {/* Right side text animation */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-sm"
          >
            Portfolio
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;