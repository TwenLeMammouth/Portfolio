import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from 'typings'
import { urlFor } from 'sanityconfig'

type Props = {
    pageInfo: PageInfo;
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.2 }}
    className="flex flex-col relative h-screen text-center max-w-7xl 
    px-10 justify-evenly mx-auto items-center">
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
        className="-mb-20 flex-shrink-0 h-56 w-56 rounded-full object-cover md:rounded-lg md:h-60 md:w-60 xl:h-[300px] xl:w-[300px]"
        src={urlFor(pageInfo?.profilePic).url()}
        />
        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">Little Background</h4>
            <p>
                {pageInfo?.backgroundInformation}
                {/* Un long texte a propos de moi, je sais pas encore trop quoi dire, 
                mais ca va venir, on est pas a la minute non plus, et puis on sait 
                pas encore trop si il faut l'ecrire en Francais ou en Anglais. 
                Because yes! I can speak english too, and I really enjoy it for 8 years 
                now and I want to continue speaking at least 2 languages all my life ! */}
            </p>
        </div>
    </motion.div>
  )
}
