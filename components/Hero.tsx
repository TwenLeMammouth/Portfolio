import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import Link from 'next/link'
import { PageInfo } from 'typings'
import { urlFor } from 'sanityconfig'

type Props = {
    pageInfo: PageInfo;
}

export default function Hero({ pageInfo }: Props) {
    
    const [text, count] = useTypewriter({
        words: [
            "C'est pas faux !",
            "Life is a Game",
            "君はヒーローになれる",
            "お腹　が　すいた",
        ],
        loop: true,
        delaySpeed: 2000,
        deleteSpeed: 25,
    })
  return (
        <div className="relative h-screen flex flex-col space-y-6 justify-center items-center text-center overflow-hidden">
            <BackgroundCircles />
            <img
            className="relative rounded-full h-40 w-40 mx-auto object-cover"
            src={urlFor(pageInfo?.heroImage).url()}
            alt="" />
            <div className="z-20">
                <div className="flex flex-col mx-auto justify-center items-center text-center">
                    <span className="text-3xl uppercase font-black tracking-[4px]">
                        {pageInfo?.name}
                    </span>
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
                        {pageInfo?.role}
                    </h2>
                </div>
                <div className="text-3xl lg:text-5xl md:text-4xl font-semibold px-10">
                    <span> {text} </span>
                    <Cursor cursorColor="#12DD88" />
                </div>
                <div className="pt-5 mx-auto grid sm:grid-cols-4 sm:gap-4 grid-cols-2 gap-2 ">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
  )
}