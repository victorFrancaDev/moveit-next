import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = (currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={styles.experienceBar} >
            <span>0 xp</span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }} >
                    { percentToNextLevel > 0 && (
                      <span>{ currentExperience } xp</span>
                    )}                  
                </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    )
}