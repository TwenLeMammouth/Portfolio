import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType} from 'typings';
import { urlFor } from 'sanityconfig';

type Props = {
    skill: SkillType;
    directionLeft?: boolean;
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img 
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className=" rounded-lg border border-gray-500 object-contain p-1 w-24 h-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transiton duration-300 ease-in-out"
        src={urlFor(skill.image).url()}
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out rounded-lg group-hover:bg-white h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 z-0">
            <div className="flex h-full flex-col justify-center items-center text-center">
                <p className="text-2xl font-bold text-black opacity-100">{skill.title}</p>
                <p className="text-2xl font-bold text-black opacity-100">{skill.progress}%</p>
            </div>
        </div>
    </div>
  )
}