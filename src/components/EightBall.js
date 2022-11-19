import React, {useState} from "react";
import "../styles/EightBall.css"

const EightBall = ({answers}) => {
    const choice = Math.floor(Math.random() * (answers.length - 1) + 1 );

    const [sentence, setSentence] = useState("Think of a Question")

    const showAnswer = () => {
        setSentence(answers[choice].msg);
    }
    const resetQuestion = () => {
        setSentence("Think of a Question");
    }

    const isQuestion = sentence === "Think of a Question";

    return(
        <>
        <div className={"EightBall " + (isQuestion ? "question" : `${answers[choice].color}`)} onClick={showAnswer}>
            <p className="EightBall-sentence">{sentence}</p>
        </div>
        <button onClick={resetQuestion}>Reset</button>
        </>
    );
}

export default EightBall;