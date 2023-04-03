import Head from 'next/head'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import WorkingExperience from 'components/WorkingExperience'
import Skills from 'components/Skills'
import Projects from 'components/Projects'
import ContactMe from 'components/ContactMe'
import type { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skill, Social, Location, Trip } from 'typings'
import { fetchPageInfo } from 'utils/fetchPageInfo'
import { fetchExperiences } from 'utils/fetchExperiences'
import { fetchSkills } from 'utils/fetchSkills'
import { fetchProjects } from 'utils/fetchProjects'
import { fetchSocials } from 'utils/fetchSocials'
import { useEffect, useState } from 'react'
import { fetchLocations } from 'utils/fetchLocations'
import { fetchTrips } from 'utils/fetchTrips'
import Arrow from 'components/Arrow'

const inter = Inter({ subsets: ['latin'] })

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  locations: Location[];
  trips: Trip[];
}

export default function Home({ pageInfo, experiences, projects, skills, socials, locations, trips }: Props) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if(!hasMounted) {
    return null
  }

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scroll-smooth z-0 scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-track-gray-500 scrollbar-thumb-[#12DD88]/80">
      <Head>
        <title>Create Next App</title>
      </Head>
      
      <Header socials={ socials } />
      
      <section id="hero" className="snap-start">
        <Hero pageInfo={ pageInfo } />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={ pageInfo } />
      </section>
    
      <section id="experience" className="snap-center">
        <WorkingExperience experiences={ experiences } locations={ locations } trips={ trips } />
      </section>
      
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      
      <section id="contact" className="snap-start">
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex justify-center items-center">
            <Arrow 
            width={88}
            height={40}
            strokeWidth={88}
            color="#12DD88"
            className="filter grayscale hover:grayscale-0" />
          </div>
        </footer>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();
  const locations: Location[] = await fetchLocations();
  const trips: Trip[] = await fetchTrips();

  return {
    props: {
      pageInfo,
      experiences,
      projects,
      skills,
      socials,
      locations,
      trips,
    },
    revalidate: 10,
  }
}
