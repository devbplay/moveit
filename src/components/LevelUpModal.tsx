import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengesContext'
import style from '../styles/components/LevelUpModal.module.scss'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengeContext)

    return (
        <div className={style.overlay}>
            <div className={style.LevelUpModalContainer}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type="button" onClick={() => closeLevelUpModal()}>
                    <img src="/icons/close.svg" alt="close-modal"/>
                </button>
            </div>
        </div>
    )
}