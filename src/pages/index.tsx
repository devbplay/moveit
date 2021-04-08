import { GetServerSideProps } from 'next'

import { CompletedChallenges } from "../components/CompletedChallenges"
import { CountDown } from "../components/CountDown"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"

import { CountdownProvider } from '../contexts/CountdownContext'

import Head from 'next/head'

import style from '../styles/pages/Home.module.scss'
import { ChallengeBox } from "../components/ChallengeBox"
import { ChallengesProvider } from '../contexts/ChallengesContext'

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={style.container}>
        <Head>
          <title>Início | Move.it</title>
        </Head>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile />

              <CompletedChallenges />

              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
