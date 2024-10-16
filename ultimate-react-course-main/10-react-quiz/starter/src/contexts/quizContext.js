import { createContext, useContext, useEffect, useReducer } from "react";

const quizContext = createContext();

const SECS_PER_QUES = 30;

const initialState = {
    questions: [],
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highScore: 0,
    secondsRemaining: null
}

function reducer(state, action) {
    switch (action.type) {
        case "dataReceived":
            return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
            return { ...state, status: "error" };
        case "start":
            return {
                ...state,
                status: "active",
                secondsRemaining: state.questions.length * SECS_PER_QUES
            };
        case "newAnswer":
            const question = state.questions.at(state.index);

            return {
                ...state, answer: action.payload,
                points: action.payload === question.correctOption ?
                    state.points + question.points :
                    state.points,
            };
        case "nextQuestion":
            return { ...state, index: state.index + 1, answer: null }
        case "finish":
            return {
                ...state, status: "finished",
                highScore: state.points > state.highScore ?
                    state.points : state.highScore,
            }
        case "restart":
            return {
                ...initialState, questions: state.questions, status: "ready"
            }
        case "tick":
            return {
                ...state,
                secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining === 0 ? "finished" : state.status
            }
        default:
            throw new Error("Action unknown");
    }
}

function QuizProvider({ children }) {
    const [{ questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining
    }, dispatch] = useReducer(reducer, initialState);
    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0)

    useEffect(function () {
        fetch(`http://localhost:8000/questions`)
            .then(res => res.json())
            .then(data => dispatch({ type: "dataReceived", payload: data }))
            .catch(err => dispatch({ type: "dataFailed" }));
    }, []);

    return (
        <quizContext.Provider
            value={{
                questions,
                status,
                index,
                answer,
                points,
                highScore,
                secondsRemaining,
                dispatch,
            }}
        >
            {children}
        </quizContext.Provider>
    );
}

function useQuiz() {
    const context = useContext(quizContext);
    if (context === undefined) {
        throw new Error("QuizConntext was used outside the QuizProvider");
    }
    return context;
}

export { QuizProvider, useQuiz };