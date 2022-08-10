import Question from "./Question/Question";
import Answers from "./Answers/Answers";

function Quiz() {

    return (
        <div className={"mt-3"}>
            <Question/>
            <Answers/>
            <button
                type={"submit"}
                className={"btn btn-outline-secondary mt-3"}
            >Next Question</button>
        </div>
    );
}

export default Quiz;