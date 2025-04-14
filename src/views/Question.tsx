import { useState } from 'react';
import styles from './styles/Question.module.css';
import { Timer } from './Timer';

interface Answers {
  choices: string
  correct: boolean
}

interface QuestionI {
  statement: string
  answers: Answers[]
}

interface Props {
  question: QuestionI
  onClick: (answers: Answers) => void
  selectedAnswer: boolean
  showModal: boolean
  next: () => void
  message: boolean
}

export function Question({ question, onClick, next, selectedAnswer, showModal, message }: Props) {
  const [expiryTimestamp, setExpiryTimestamp] = useState(new Date())
  const newTime = new Date()

  const handleRestart = () => {
    newTime.setSeconds(newTime.getSeconds() + 40)
    setExpiryTimestamp(newTime)
  }

  const messageModal = selectedAnswer ? 'Resposta Correta 🎉' : 'Resposta errada ☹️'

  const filterQuestionCorrect = question.answers.filter(answer => answer.correct === true).map(answer => answer.choices)
  const correctAnswer = selectedAnswer ? '' : `A resposta Correta é ${filterQuestionCorrect}`

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{question.statement}</h1>
      <div className={styles.answers}>
        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
              </div>
              <div className={styles.modalBody}>
                {!message && (
                  <p className={styles.modalMessage}>
                    {messageModal} <span role="img" aria-label="party popper"></span>
                    <br></br>
                    {correctAnswer}
                  </p>
                )}
                {message && (
                  <p className={styles.modalMessage}>
                    {messageModal} <span role="img" aria-label="party popper"></span>
                    <br></br>
                    {correctAnswer}
                  </p>
                )}
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.nextButton} onClick={() => next()}>
                  Próxima
                </button>
              </div>
            </div>
          </div>
        )}
        {question.answers.map((answers, index) => (
          <button
            className={styles.button}
            onClick={() => onClick(answers)}
            key={index}
          >
            {answers.choices}
          </button>
        ))}
      </div>
      <Timer expiryTimestamp={expiryTimestamp} onRestart={handleRestart} />
    </div >
  );
}