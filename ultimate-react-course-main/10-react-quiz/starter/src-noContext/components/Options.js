function Options({ question, dispatch, answer }) {

    const hasAnswere = answer !== null;

    return (
        <div className="options" >
            {question.options.map((option, index) =>
                <button className={`btn btn-option ${index === answer ? "answer" : ""}
                ${hasAnswere ?
                        index === question.correctOption ? "correct" : "wrong" :
                        ""} `}
                    key={option}
                    onClick={() => dispatch({ type: "newAnswer", payload: index })}
                    disabled={hasAnswere}
                >
                    {option}
                </button>)}
        </div>
    )
}

export default Options
