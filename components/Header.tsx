import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Social } from 'typings'

type Props = {
  socials: Social[]
}

const headerMotion = {
  init: {
    y: -200,
    opacity: 0,
    scale: 0.5,
  },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 50,
      damping: 8,
    },
  },
}

export default function Header({ socials }: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between mx-auto z-20 xl:items-center'>
        <motion.div 
          variants={headerMotion}
          initial="init"
          animate="show"
          className='flex flex-row items-center relative rounded-full pl-8 -left-9 ring-1 ring-inset ring-gray-500'>
          {socials.map((social) => (
            <SocialIcon 
              key={social._id}
              bgColor="#12DD88"
              url={social.link} 
              />
          ))}
          {/* <SocialIcon bgColor="#12DD88" url="https://www.linkedin.com/in/vgroslier/"></SocialIcon>
          <SocialIcon bgColor="#12DD88" url="https://github.com/TwenLeMammouth"></SocialIcon>
          <SocialIcon bgColor="#12DD88" url=""></SocialIcon> */}
        </motion.div>

      <Link href="#contact">
        <motion.div
          variants={headerMotion}
          initial="init"
          animate="show"
          className='flex flex-row items-center'>
          <div className='relative rounded-full ring-1 ring-inset ring-gray-500 pr-8 -right-9'>
            <SocialIcon bgColor="#12DD88" network="email" />
            <div className='uppercase hidden pl-3 md:inline-flex text-sm text-gray-500'>
              <p> Get in touch</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </header>
  )
}