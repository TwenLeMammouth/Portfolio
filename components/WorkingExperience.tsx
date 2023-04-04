import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from 'components/ExperienceCard'
import { Experience, Location, Trip } from 'typings';
import EarthCanvas from './Earth';

type Props = {
  experiences: Experience[];
  locations: Location[];
  trips: Trip[];
}

export default function WorkingExperience({experiences, locations, trips}: Props) {
  
  return (
    <div className='flex flex-row relative h-screen justify-evenly items-center'>
      <div className='relative w-[50%] h-full z-0 '>
        {window && (
          <EarthCanvas experiences={ experiences } locations={ locations } trips={ trips } />
        )}
      </div>
      <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col relative h-screen w-[50%] z-10 overflow-hidden text-left md:flex-row  
      px-8 justify-evenly items-center ">
          <h3 className="pageTitle">Experience</h3>
        <div className=" flex space-x-5 mx-auto overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-track-gray-400/20 scrollbar-thumb-[#12DD88]/80">
          {experiences?.map((experience) => 
            <ExperienceCard key={experience._id} experience={experience} />
          )}
        </div>
      </motion.div>
    </div>
  )
}