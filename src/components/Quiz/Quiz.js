import Question from "./Question/Question";
import Answers from "./Answers/Answers";

function Quiz() {

    return (
        <div>
            <Question/>
            <Answers/>
            <button type={"submit"}>Next Question</button>
        </div>
    );
}

export default Quiz;