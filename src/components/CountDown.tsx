import { useState, useEffect, useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

import style from '../styles/components/CountDown.module.scss'

export function CountDown() {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    return (
        <div>
            <div className={style.CountDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled className={style.countDownButton}>
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button type="button" className={`${style.countDownButton} ${style.countDownButtonActive}`} onClick={ () => resetCountdown() }>
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type="button" className={style.countDownButton} onClick={ () => startCountdown() }>
                            Iníciar um ciclo
                        </button>
                    ) }
                </>
            ) }
        </div>
    )
}