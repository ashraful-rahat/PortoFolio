
import { FaEnvelope, FaFacebook, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgb(32, 37, 40)",
        padding: "50px 20px",
        color: "white",
        textAlign: "center",
        borderTop: "1px solid gray",
      }}
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Name Section */}
        <div 
          data-aos="fade-right"
          data-aos-duration="600"
          data-aos-once="true"
        >
          <h2 style={{ fontSize: "32px", marginBottom: "10px", color: "#00ffcc", fontWeight: "bold" }}>
            Ashraful Rahat
          </h2>
          <p style={{ fontSize: "18px", color: "#ffd700", marginBottom: "20px" }}>
            MERN Stack Developer | Building Awesome Web Apps
          </p>
        </div>

        {/* Social Icons */}
        <div
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="600"
          style={{ display: "flex", justifyContent: "center", gap: "35px", margin: "20px 0" }}
        >
          <a
            href="https://www.linkedin.com/in/ashraful-rahat-a74457278"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaLinkedin size={32} style={{ color: "#0a66c2" }} />
          </a>

          <a
            href="https://github.com/ashraful-rahat"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub size={32} style={{ color: "white" }} />
          </a>

          <a
            href="https://www.facebook.com/rayhan.rifa.3"
            target="_blank"
            rel="noreferrer"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <FaFacebook size={32} style={{ color: "#1877f2" }} />
          </a>
        </div>

        {/* Contact Info */}
        <div data-aos="fade-right" data-aos-delay="600">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "10px" }}>
            <FaEnvelope size={20} style={{ color: "#ff4444" }} />
            <a
              href="mailto:spinball61@gmail.com"
              style={{ color: "#ff4444", textDecoration: "none", fontSize: "16px" }}
              data-aos="fade-left"
              data-aos-delay="700"
            >
              spinball61@gmail.com
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <FaPhone size={20} style={{ color: "#00cc00" }} />
            <span style={{ color: "#00cc00", fontSize: "16px" }} data-aos="fade-left" data-aos-delay="800">
              01867559512
            </span>
          </div>
        </div>

        {/* Copyright Section */}
        <div data-aos="fade-up" data-aos-delay="900">
          <p style={{ fontSize: "14px", color: "#999999", marginTop: "20px", borderTop: "1px solid #555555", paddingTop: "10px" }}>
            © {new Date().getFullYear()} Ashraful Rahat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;