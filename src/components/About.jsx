import React from 'react';
import Tilt from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='sm:w-[250px] w-[225px]'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full bg-gradient-to-tr from-pink from-5% to-[#9782ff] from-20% via-cyan-300 via-5%
            via-aqua-400 via-30% to-[#476fdc] to-40% p-[2px] rounded-[20px] shadow-card'
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className='bg-black-100 rounded-[20px] py-5 px-5 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-32 h-32 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-white-100 tex-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like Vue.js, Node.js and React. My passion lies
        in transforming machine learning data into user-friendly and valuable
        products. I have the skills to turn data-driven insights into actionable
        solutions. If you're looking for a dedicated and innovative partner to
        help you turn your data into a powerful product, let's connect and bring
        your ideas to life.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 justify-center'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
