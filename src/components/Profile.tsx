import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.scss'

export function Profile() {
    const { level } = useContext(ChallengeContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/devbplay.png" alt="Matheus Antunes" />
            <div>
                <strong>Matheus Antunes</strong>
                <p>
                    <img src="icons/level.svg" alt="level-icon" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}