import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import style from '../styles/components/CompletedChallenges.module.scss'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext)

    return (
        <div className={style.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}