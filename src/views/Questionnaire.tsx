import { useState } from "react"
import { Question } from "./Question"
import { ScoreBoard } from "./scoreBoard"
import { useNavigate } from "react-router-dom"

interface QuestionI {
    statement: string
    answers: Answers[]
}

interface Answers {
    choices: string
    correct: boolean
}

export function Questionnaire() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [hists1, sethists1] = useState(0)
    const [hits2, setHits2] = useState(0)
    const [player1, setPlayer1] = useState(true)
    const [player2, setPlayer2] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<any>();
    const [showModal, setShowModal] = useState(false)
    const [message, setMessage] = useState(false)
    const navigate = useNavigate()


    const questions: QuestionI[] = [
        {
            statement: "Quais são as capitais da França?",
            answers: [
                { choices: "Paris", correct: true },
                { choices: "Londres", correct: false },
                { choices: "Berlim", correct: false },
                { choices: "Madrid", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Itália?",
            answers: [
                { choices: "Roma", correct: true },
                { choices: "Milão", correct: false },
                { choices: "Veneza", correct: false },
                { choices: "Florença", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Alemanha?",
            answers: [
                { choices: "Berlim", correct: true },
                { choices: "Munique", correct: false },
                { choices: "Hamburgo", correct: false },
                { choices: "Colônia", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Espanha?",
            answers: [
                { choices: "Madrid", correct: true },
                { choices: "Barcelona", correct: false },
                { choices: "Valência", correct: false },
                { choices: "Sevilha", correct: false },
            ],
        },
        {
            statement: "Qual é a capital do Reino Unido?",
            answers: [
                { choices: "Londres", correct: true },
                { choices: "Manchester", correct: false },
                { choices: "Liverpool", correct: false },
                { choices: "Edimburgo", correct: false },
            ],
        },
        {
            statement: "Qual é a capital do Japão?",
            answers: [
                { choices: "Tóquio", correct: true },
                { choices: "Quioto", correct: false },
                { choices: "Osaka", correct: false },
                { choices: "Nagoya", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da China?",
            answers: [
                { choices: "Pequim", correct: true },
                { choices: "Xangai", correct: false },
                { choices: "Hong Kong", correct: false },
                { choices: "Cantão", correct: false },
            ],
        },
        {
            statement: "Qual é a capital dos Estados Unidos?",
            answers: [
                { choices: "Washington, D.C.", correct: true },
                { choices: "Nova York", correct: false },
                { choices: "Los Angeles", correct: false },
                { choices: "Chicago", correct: false },
            ],
        },
        {
            statement: "Qual é a capital do Canadá?",
            answers: [
                { choices: "Ottawa", correct: true },
                { choices: "Toronto", correct: false },
                { choices: "Montreal", correct: false },
                { choices: "Vancouver", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Austrália?",
            answers: [
                { choices: "Camberra", correct: true },
                { choices: "Sydney", correct: false },
                { choices: "Melbourne", correct: false },
                { choices: "Brisbane", correct: false },
            ],
        },
        {
            statement: "Qual é a capital do Brasil?",
            answers: [
                { choices: "Brasília", correct: true },
                { choices: "Rio de Janeiro", correct: false },
                { choices: "São Paulo", correct: false },
                { choices: "Salvador", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Argentina?",
            answers: [
                { choices: "Buenos Aires", correct: true },
                { choices: "Córdoba", correct: false },
                { choices: "Rosário", correct: false },
                { choices: "Mendoza", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Índia?",
            answers: [
                { choices: "Nova Delhi", correct: true },
                { choices: "Mumbai", correct: false },
                { choices: "Calcutá", correct: false },
                { choices: "Chennai", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da Rússia?",
            answers: [
                { choices: "Moscou", correct: true },
                { choices: "São Petersburgo", correct: false },
                { choices: "Novosibirsk", correct: false },
                { choices: "Ecaterimburgo", correct: false },
            ],
        },
        {
            statement: "Qual é a capital da África do Sul?",
            answers: [
                { choices: "Pretória", correct: true },
                { choices: "Cidade do Cabo", correct: false },
                { choices: "Bloemfontein", correct: false },
                { choices: "Joanesburgo", correct: false },
            ],
        },
    ]

    const changePlayers = () => {
        if (player1) {
            setPlayer1(false)
            setPlayer2(true)
        } else {
            setPlayer2(false)
            setPlayer1(true)
        }
        player1 ? alert('vez de jogador 2') : alert('vez de jogador 1')
    }

    const nextQuestion = () => {
        if (questions.length > currentIndex + 1) {
            setCurrentIndex(currentIndex + 1)
            setShowModal(false)
            console.log('teste')
        } else {
            setShowModal(true)
            setMessage(true)
        }
    }

    const onClickResposta = (answers: Answers) => {
        setSelectedAnswer(answers.correct);
        if (answers.correct) {
            if (currentIndex < questions.length - 1) {
                setShowModal(true)
                player1 ? sethists1(hists1 + 1) : setHits2(hits2 + 1)
            } else {
                player1 ? sethists1(hists1 + 1) : setHits2(hits2 + 1)
                navigate('/end-of-game')
            }
        } else {
            changePlayers()
            setShowModal(true)
        }
    }

    return (
        <>
            <ScoreBoard
                scorePlayer1={hists1}
                scorePlayer2={hits2}
            />
            <Question question={questions[currentIndex]} onClick={onClickResposta} next={nextQuestion} selectedAnswer={selectedAnswer} showModal={showModal} message={message} />
        </>

    )
}