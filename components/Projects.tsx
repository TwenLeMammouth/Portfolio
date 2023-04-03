import React from 'react'
import { motion } from 'framer-motion'
import { Project } from 'typings';
import { urlFor } from 'sanityconfig';
import Arrow from './Arrow';

type Props = {
    projects: Project[];
}

export default function Projects({projects}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0">
        <h3 className="pageTitle">Projects</h3>
        <Arrow width={100} height={75} strokeWidth={20} color={"#12DD88"} className="absolute left-0 -rotate-90 grayscale hover:grayscale-0 z-30" />
        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-track-gray-400/20 scrollbar-thumb-[#12DD88]/80">
            {projects?.map((project, i) => (
                <div key={i} className="w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-20 md:p-44">
                    <motion.img 
                    initial={{ y: -300, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    src={urlFor(project?.image).url()} 
                    className="flex-shrink-0 h-56 w-56 rounded-half object-contain md:rounded-lg md:h-80 md:w-80 xl:h-[400px] xl:w-[400px]" />
                    <div className="space-y-5 px-0 md:px-10 max-w-6xl">
                        <div className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#12DD88]/50">{project?.title}</span>
                            {" - "}{i + 1} of {projects?.length}
                        </div>
                        <div className='flex space-x-2 items-center justify-center'>
                            {project?.technologies.map(technology => 
                                <img 
                                className='h-8 w-8 rounded-lg border border-gray-500 p-1'
                                key={technology._id} 
                                src={urlFor(technology.image).url()}
                                alt="" />
                            )}
                        </div>
                        <p className="text-lg text-center md:text-left">
                            {project?.summary}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        <Arrow width={100} height={75} strokeWidth={20} color={"#12DD88"} className="absolute right-0 rotate-90 grayscale hover:grayscale-0 z-30" />
        <div className="w-full h-[50%] absolute top-[30%] bg-[#12DD88]/5 left-0 -skew-y-12" />
        <div className="w-full h-[50%] absolute top-[30%] bg-[#12DD88]/5 left-0 skew-y-12" />
        <div className="w-full h-[50%] absolute top-[30%] bg-[#12DD88]/5 left-0 -skew-y-6" />
        <div className="w-full h-[50%] absolute top-[30%] bg-[#12DD88]/5 left-0 skew-y-6" />
        <div className="w-full h-[50%] absolute top-[30%] bg-[#12DD88]/5 left-0" />

    </motion.div>
  )
}