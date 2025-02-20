import About from "./About";
import Banner from "./Banner";
import MyResume from "./MyResume";
import WhatDo from "./WhatDo";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <WhatDo></WhatDo>
            <MyResume></MyResume>
        </div>
    );
};

export default Home;