import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['50%', '100%', '150%', '200%', '50%']
    }}
    transition={{
        duration: 5,
    }}
    className="relative flex justify-center items-center">
        <div className="absolute border border-gray-500 rounded-full h-[800px] w-[800px] mt-52 animate-pulse" />
        <div className="absolute border border-[#12DD88] rounded-full h-[700px] w-[700px] mt-52 animate-pulse"/>
        <div className="absolute border border-[#129988] rounded-full h-[220px] w-[220px] mt-52 animate-pulse"/>
        <div className="absolute border border-gray-500 rounded-full h-[200px] w-[200px] mt-52 animate-pulse"/>
    </motion.div>
  )
}