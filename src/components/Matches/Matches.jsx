
import React from 'react';
import styles from './Matches.module.css';

const Matches= ({match}) => {
    return(
    
        <div className={styles.detail_list}>

            <div className={styles.startDate}>{match.utcDate}</div>
            <div className={styles.detail_matches}>
                <div className={styles.awayTeam}>
                    <div className={styles.title}>{match.awayTeam.name}</div>
                    <div className={styles.logo}>
                        <img src="https://footballapi.ir/img/team/team_default.png" alt={match.awayTeam.name} />
                    </div>
                </div>
                <div className={styles.result_status}>
                    <div className={styles.result}>{match.score.winner}</div>
                    <div className={styles.status}>{match.status}</div>
                </div>
                <div className={styles.homeTeam}>
                    <div className={styles.logoo}>
                        <img src="https://footballapi.ir/img/team/team_default.png" alt={match.homeTeam.name} />
                    </div>
                    <div className={styles.title}>{match.homeTeam.name}</div>
                </div>
            </div>

            <div className={styles.referees}>
                <div className={styles.referees_middle}>
                    <span>داور وسط:</span>
                    <span>{match.referees}</span>
                </div>
                <div className={styles.referees_assistant}>
                     <span>کمک داور :</span>
                    <span>{match.referees}</span>
                </div>
                <div className={styles.referees_fourth}>
                    <span>داور چهارم :</span>
                    <span>{match.referees}</span>
                </div>
            </div>

        </div>
)
}

export default Matches;