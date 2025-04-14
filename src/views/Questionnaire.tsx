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
            "statement": "Qual é a saída do seguinte código em JavaScript?\n```javascript\nconsole.log(2 + '2');\n```",
            "answers": [
                { "choices": "4", "correct": false },
                { "choices": "'22'", "correct": true },
                { "choices": "22", "correct": false },
                { "choices": "Erro", "correct": false }
            ]
        },
        {
            "statement": "Qual das seguintes opções declara uma variável em JavaScript que pode ter seu valor alterado?",
            "answers": [
                { "choices": "const nome = 'João';", "correct": false },
                { "choices": "let idade = 30;", "correct": true },
                { "choices": "final valor = 10;", "correct": false },
                { "choices": "readonly pi = 3.14;", "correct": false }
            ]
        },
        {
            "statement": "O que o operador `===` faz em JavaScript?",
            "answers": [
                { "choices": "Compara apenas os valores.", "correct": false },
                { "choices": "Atribui um valor a uma variável.", "correct": false },
                { "choices": "Compara os valores e os tipos de dados.", "correct": true },
                { "choices": "Realiza uma operação matemática de igualdade.", "correct": false }
            ]
        },
        {
            "statement": "Qual das seguintes opções representa um array em Python?",
            "answers": [
                { "choices": "(1, 2, 3)", "correct": false },
                { "choices": "{1, 2, 3}", "correct": false },
                { "choices": "[1, 2, 3]", "correct": true },
                { "choices": "'1, 2, 3'", "correct": false }
            ]
        },
        {
            "statement": "Qual é a função utilizada em Python para imprimir algo no console?",
            "answers": [
                { "choices": "log()", "correct": false },
                { "choices": "print()", "correct": true },
                { "choices": "console.log()", "correct": false },
                { "choices": "output()", "correct": false }
            ]
        },
        {
            "statement": "O que é um loop `for` geralmente usado em programação?",
            "answers": [
                { "choices": "Para definir condições.", "correct": false },
                { "choices": "Para repetir um bloco de código um número específico de vezes.", "correct": true },
                { "choices": "Para declarar variáveis.", "correct": false },
                { "choices": "Para criar funções.", "correct": false }
            ]
        },
        {
            "statement": "Qual das seguintes opções define uma função em JavaScript?",
            "answers": [
                { "choices": "method myFunction() {}", "correct": false },
                { "choices": "function = myFunction() {}", "correct": false },
                { "choices": "function myFunction() {}", "correct": true },
                { "choices": "def myFunction() {}", "correct": false }
            ]
        },
        {
            "statement": "O que significa a sigla HTML?",
            "answers": [
                { "choices": "Hyper Text Markup Language", "correct": true },
                { "choices": "Highly Typed Machine Language", "correct": false },
                { "choices": "Hyperlink and Text Management Language", "correct": false },
                { "choices": "Home Tool Markup Language", "correct": false }
            ]
        },
        {
            "statement": "Qual tag HTML é usada para criar um parágrafo?",
            "answers": [
                { "choices": "<h1>", "correct": false },
                { "choices": "<div>", "correct": false },
                { "choices": "<p>", "correct": true },
                { "choices": "<span>", "correct": false }
            ]
        },
        {
            "statement": "Qual dos seguintes não é um tipo de dado primitivo comum em muitas linguagens de programação?",
            "answers": [
                { "choices": "inteiro (integer)", "correct": false },
                { "choices": "booleano (boolean)", "correct": false },
                { "choices": "string", "correct": false },
                { "choices": "lista (list)", "correct": true }
            ]
        }
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