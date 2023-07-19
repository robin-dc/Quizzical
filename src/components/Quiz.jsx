import { useEffect, useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";



function Quiz() {
    const [data, setData] = useState(null)
    const [answers, setAnswers] = useState([])
    const [isSubmit, setIsSubmit] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [score, setScore] = useState(0)
    const [shuffledChoices, setShuffledChoices] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        if(!isSubmit){
            async function fetchData(){
                const response = await fetch('https://opentdb.com/api.php?amount=5&category=9&type=multiple')
                const data = await response.json()
                setData(data.results)
                setShuffledChoices(data.results.map(quiz => shuffleChoices(quiz.incorrect_answers, quiz.correct_answer)));
                setIsLoading(false)
            }
            fetchData()
        }
    }, [isSubmit])

    function choose(question, answer){
        // Check if the question already exists in the answers array
        const questionExists = answers.some(item => item.question === question);

        if (questionExists) {
            // Question already exists, update the answer
            const updatedArray = answers.map(item =>
                item.question === question ? { ...item, answer: answer } : item
            );
            setAnswers(updatedArray);
        } else {
          // Question doesn't exist, add it to the answers array
          setAnswers(prevAnswers => [...prevAnswers, { question: question, answer: answer }]);
        }
    }

    function shuffleChoices(incorrects, correct){
        const choices = [...incorrects]
        const randomIndex = Math.floor(Math.random() * (choices.length + 1));
        choices.splice(randomIndex, 0, correct);

        return choices
    }

    const correctAnswers = data && data.map(item => item.correct_answer);
    const yourAnswers = answers && answers.map(item => item.answer);

    function checkAnswer(){
        if(!isSubmit){
            let newScore = 0
            if(answers.length === correctAnswers.length){
                for(let i = 0; i < correctAnswers.length ; i++){
                    const correct = correctAnswers[i]
                    for(let j = 0; j < yourAnswers.length; j++){
                        const yourAnswer = answers[j].answer
                        if(correct === yourAnswer){
                            newScore += 1
                        }
                    }

            }
            setScore(newScore);
            setIsSubmit(true)
            }
        }
        else{
            setIsSubmit(false)
            setScore(0)
            setAnswers([])
        }
    }

    return (
        <>
            {isSubmit &&
            <div
                className="fixed pointer-events-none top-0 bottom-0 left-0 right-0">
                <Confetti/>
            </div>}
            <div className="container p-1 lg:px-4 lg:py-3">
            {!isSubmit && isLoading ?
                <div className="min-h-[100vh] w-full flex justify-center lg:pb-[10rem]"><img src="/loader.svg"/></div>
            :
            <>
                {data && data.map((quiz, index) =>
                <Question
                    key={nanoid()}
                    {...quiz}
                    choose={choose}
                    answers={answers}
                    choices= {shuffledChoices[index]}
                    index={index + 1}
                    isSubmit={isSubmit}
                />)}

                <div className="flex justify-center items-center mt-2 gap-[0.5rem] lg:gap-1">
                    {isSubmit && <p className="font-bold text-[1.3rem]">You scored {score}/5 correct answers</p>}
                    <button
                        className="text-white bg-button px-2 py-[0.5rem] rounded-[10px] active:scale-[0.9] transition duration-200"
                        onClick={checkAnswer}
                        >{isSubmit ? "Play Again " : "Check Answers"}</button>
                </div>
            </>
            }
        </div>
        </>
     );
}

export default Quiz;
