import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from 'typings';
import { urlFor } from 'sanityconfig';
import Image from 'next/image';

type Props = {
  experience: Experience;
}

export default function ExperienceCard({experience}: Props) {
  
  return (
    <div className="flex flex-col rounded-lg items-center space-y-1 flex-shrink-0 w-[500px] md:w-[600px] snap-end bg-[#303030] p-5 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200 overflow-hidden">
        <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{y: 0, opacity: 1}}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full object-cover object-center"
        src={urlFor(experience.companyImage).url()} />
        <div className="px-0 md:px-8">
          <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
          <p className="text-2xl font-bold">{experience?.company}</p>
          <div className="flex space-x-2 my-2">
            {experience?.technologies?.map(technology => 
              <img 
                className="h-10 w-10 rounded-md object-cover object-center p-1"
                key={technology._id} 
                src={urlFor(technology.image).url()} 
                alt="" />
            )}
            
          </div>
          <div className="flex flex-row w-full justify-between uppercase py-3 text-gray-300">
            <p >
              {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere 
              ? "Present" 
              : new Date(experience?.dateEnded).toDateString()}
            </p>
            <p className='text-right'>
              {experience?.location.city}
            </p>

          </div>
          <ul className="list-disc space-y-3 ml-5 text-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-[#12DD88]/80">
            {experience?.points?.map((point, i)=> 
              <li key={i}>{point}</li>
            )}
          </ul>
        </div>
    </div>
  )
}