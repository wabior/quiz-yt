import './App.css';
import Header from "./components/Header/Header";
import Welcome from "./components/Welcome/Welcome";
import Quiz from "./components/Quiz/Quiz";
import Score from "./components/Score/Score";
import {useState} from "react";

function App() {
    const statuses = [
        'initial',
        'quiz',
        'score'
    ];

    const [appStatus, setAppStatus] = useState('initial');

    const changeStatus = () => {
        let status = statuses.indexOf(appStatus) + 1;
        console.log(status);
        status = status > 2 ? 0 : status;
        console.log(status);
        setAppStatus(statuses[status]);
    }

    return (
        <div className="App">
            <Header/>
            <div className={'container'}>
                {appStatus === 'initial' && <Welcome/>}
                {appStatus === 'quiz' && <Quiz/>}
                {appStatus === 'score' && <Score/>}

                {!statuses.includes(appStatus) &&
                    <div className={'alert alert-danger'}>wrong status</div>
                }

                <button
                    onClick={changeStatus}
                    className={'btn btn-danger my-4'}>
                    Change status
                </button>
            </div>
        </div>
    );
}

export default App;
