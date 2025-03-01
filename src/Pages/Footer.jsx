import { motion } from "framer-motion";
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  // Simple fade-in animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  // Hover effect for icons
  const iconHover = {
    scale: 1.2,
    transition: { duration: 0.3 },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={fadeIn}
      viewport={{ once: true }}
      style={{
        backgroundColor: "rgb(32, 37, 40)", // Your requested background color
        padding: "50px 20px", // More padding for space
        color: "white",
        textAlign: "center",
        borderTop: "1px solid gray ", // Eye-catching top border
      }}
    >
      {/* Main Container */}
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Name Section */}
        <motion.div variants={fadeIn}>
          <h2
            style={{
              fontSize: "32px", // Bigger text
              marginBottom: "10px",
              color: "#00ffcc", // Bright cyan for attention
              fontWeight: "bold", // Bold for emphasis
            }}
          >
            Ashraful Rahat
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "#ffd700", // Gold color for contrast
              marginBottom: "20px",
            }}
          >
            MERN Stack Developer | Building Awesome Web Apps
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          variants={fadeIn}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "35px", // More space between icons
            margin: "20px 0",
          }}
        >
          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/ashraful-rahat-a74457278"
            target="_blank"
            whileHover={iconHover}
            style={{ color: "#0a66c2" }}
          >
            <FaLinkedin size={32} />
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/ashraful-rahat"
            target="_blank"
            whileHover={iconHover}
            style={{ color: "white" }}
          >
            <FaGithub size={32} />
          </motion.a>

          {/* Facebook */}
          <motion.a
            href="https://www.facebook.com/rayhan.rifa.3"
            target="_blank"
            whileHover={iconHover}
            style={{ color: "#1877f2" }}
          >
            <FaFacebook size={32} />
          </motion.a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={fadeIn}
          style={{
            margin: "20px 0",
          }}
        >
          {/* Email */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <FaEnvelope size={20} style={{ color: "#ff4444" }} />
            <a
              href="mailto:spinball61@gmail.com"
              style={{
                color: "#ff4444", // Red for email
                textDecoration: "none",
                fontSize: "16px",
              }}
            >
              spinball61@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <FaPhone size={20} style={{ color: "#00cc00" }} />
            <span style={{ color: "#00cc00", fontSize: "16px" }}>
              01867559512
            </span>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div variants={fadeIn}>
          <p
            style={{
              fontSize: "14px",
              color: "#999999",
              marginTop: "20px",
              borderTop: "1px solid #555555", // Subtle line above
              paddingTop: "10px",
            }}
          >
            © {new Date().getFullYear()} Ashraful Rahat           </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;