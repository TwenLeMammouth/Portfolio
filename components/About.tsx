import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from 'typings'
import { urlFor } from 'sanityconfig'
import Canvas from './Particles'

type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="flex flex-col relative z-10 h-screen text-center max-w-7xl 
    px-10 justify-evenly mx-auto items-center">
        <Canvas />
        <h3 className="pageTitle">About</h3>
        <motion.img 
        initial={{
            x:-100,
            opacity: 0,
        }}
        transition={{
            duration: 0.8
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        className="-mb-20 z-10 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:h-60 md:w-60 xl:h-[300px] xl:w-[300px]"
        src={urlFor(pageInfo?.profilePic).url()}
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Little Background</h4>
            <p>
                {pageInfo?.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}
