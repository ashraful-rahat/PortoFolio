import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Footer from "./Footer";
import MyResume from "./MyResume";
import Scroll from "./Scroll";
import WhatDo from "./WhatDo";


const Home = () => {
  return (
    <div className="bg-[rgb(32,37,40)] min-h-screen">
      <Scroll>
        <Banner />
      </Scroll>

      <Scroll delay={0.2}>
        <WhatDo />
      </Scroll>

      <Scroll delay={0.6}>
        <About />
      </Scroll>

      <Scroll delay={0.6}>
        <MyResume />
      </Scroll>
      <Scroll delay={0.6}>
        <Contact />
      </Scroll>
      <Scroll delay={0.4}>
        <Footer />
      </Scroll>
    </div>
  );
};

export default Home;
