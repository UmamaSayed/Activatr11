import React from 'react'
import './Hero.css';
import CountUp from 'react-countup';
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className='hero-wrapper'>
      <div className='paddings innerWidth flexCenter hero-container'>
      {/* Leftside */}
        <div className='flexcolstart hero-left' >
        <div className='hero-title'>
        <div className='orange-circle' />
        <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Unlock Growth <br />
               With ACTIVATR: Optimize Strategies<br /> Empower
               Businesses.
            </motion.h1>
            
        </div>
        
        <div className='margin flexColStart hero-des'>
          <span className='margin secondaryText'>Experience precision marketing through geolocation targeting,
                AI-driven insights.</span>
          <span className='secondaryText'>And secure offline storage for enhanced data
                accessibility and security.</span>
        </div>
        {/* <div className='margin flexCenter search-bar'>
          <HiLocationMarker color="var(--blue)"  size={25}/>
          <input type='text' />
          <button className='button'>Search</button>
        </div> */}
        
        <div className='flexCenter stats'>
          <div className='flexColCenter stat'>
            <span className='margin' >
              <CountUp start={100} end={250} duration={4}/>
              <span>+</span>
            </span><span className='secondaryText'>Premium Services</span>
            
          </div>

          <div className='flexColCenter stat'>
            <span className='margin' >
              <CountUp start={1950} end={2000} duration={4}/>
              <span>+</span>
            </span><span className='secondaryText'>Clients</span>
            
          </div>

          <div className='flexColCenter stat'>
            <span className='margin' >
              <CountUp end={100}/>
              <span>+</span>
            </span><span className='secondaryText'>Rewards</span>
            
          </div>
        </div>
        </div>
        </div>
    </section>
  );
}

export default Hero