import styles from './styles/ScoreBoard.module.css';

interface Props {
    scorePlayer1: number
    scorePlayer2: number
}

export function ScoreBoard({ scorePlayer1, scorePlayer2 }: Props) {

    return (
        <div className={styles.scoreboard}>
            <div className={styles.score}>
                <span>Grupo 1</span>
                <p>{scorePlayer1}</p>
            </div>
            <div className={styles.score}>
                <span>Grupo 2</span>
                <p>{scorePlayer2}</p>
            </div>
        </div>
    );
}
