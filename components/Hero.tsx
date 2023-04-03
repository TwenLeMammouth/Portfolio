import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from 'components/BackgroundCircles'
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
            "Je m'appelle",
            "My name is",
            "私　の　名前　は",
        ],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className="h-screen flex flex-col space-y-10 justify-center items-center text-center overflow-hidden">
        <BackgroundCircles />
        <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="" />
        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
                {pageInfo?.role}
            </h2>
            <div className="text-4xl lg:text-5xl font-semibold px-10">
                <span> {text} </span>
                <Cursor cursorColor="#12DD88" />
                <span>{pageInfo?.name}</span>
            </div>
            <div className="pt-5">
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