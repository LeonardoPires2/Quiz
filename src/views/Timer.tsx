import React, { useEffect } from 'react';
import { useTimer } from 'react-timer-hook';
import styles from './styles/ScoreBoard.module.css';

interface TimeProps {
  expiryTimestamp: Date
  onRestart: (expiryTimestamp: Date) => void
}

export function Timer({ expiryTimestamp, onRestart }: TimeProps) {
  const {
    seconds,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), interval: 20 });

  const handleRestart = () => {
    const time = new Date()
    time.setSeconds(time.getSeconds() + 40)
    restart(time)
    onRestart(time)
  }

  useEffect(() => {
    restart(expiryTimestamp)
  }, [expiryTimestamp, restart])

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '100px' }}>
      </div>
      <button className={styles.time} onClick={handleRestart}>
        <span>{seconds}</span>
      </button>
    </div>
  );
}
