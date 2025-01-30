'use client';

import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '@/utils/styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { testimonials } from '@/utils/constants';
import { useAnimateOnce } from '@/app/hooks';

type Feedback = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

const Feedbacks = () => {
  const [motionProps] = useAnimateOnce();

  return (
    <div className={'mt-12 bg-black-100 rounded-[20px]'}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} feedback={testimonial} />
        ))}
      </div>
    </div>
  );
};

const FeedbackCard = ({ index, feedback }: { index: number; feedback: Feedback }) => {
  const { testimonial, name, designation, company, image } = feedback;

  const [motionProps] = useAnimateOnce();

  return (
    <motion.div
      variants={fadeIn('', 'spring', index * 0.5, 0.75)}
      className='bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full'
      {...motionProps}
    >
      <p className='text-white font-black text-[48px]'>"</p>

      <div className='mt-1'>
        <p className='text-white tracking-wider text-[18px]'>{testimonial}</p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-10 h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Feedbacks;
