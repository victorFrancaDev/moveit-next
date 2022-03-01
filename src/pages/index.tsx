import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

const Home: NextPage = () => {
  return (
    <div className='container'>
      <ExperienceBar/>
      <section>
        <div>
          <Profile/>
        </div>
        <div>

        </div>
      </section>
    </div>
  )
}

export default Home
