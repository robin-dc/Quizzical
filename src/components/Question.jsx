import { nanoid } from "nanoid";
import he from "he";

function Question({question, choices, correct_answer, choose, answers, isSubmit, index}) {


    const ques = answers && answers.find(item => item.question === question)

    return (
        <>
            <div className="py-1 pb-2">
                <h3 className="text-base lg:text-[1.3rem] font-semibold leading-[1.5rem] lg:leading-[2rem]">
                    {index}. {he.decode(question)}</h3>

                <div className="flex gap-[0.5rem] mt-[0.7rem] lg:mt-0 lg:gap-1 flex-wrap leading-[1rem] justify-center lg:justify-start">
                    {choices.map(choice => (
                        <div className="mt-1" key={nanoid()}>
                            <input type="radio"
                            id={choice}
                            name={question}
                            className="hidden"
                            checked={ques ? ques.answer === choice : false}
                            onChange={() => choose(question, choice)}
                            disabled={isSubmit}
                          />

                            <label
                            htmlFor={choice}
                            className=" text-base py-[0.2rem] px-1 border border-primary rounded-[10px] cursor-pointer font-semibold"
                            style={{
                                color: isSubmit  && (correct_answer === choice ? "#293264" : "gray"),
                                borderColor: isSubmit &&
                                (correct_answer === choice ? "#94D7A2" : ques && ques.answer === choice ? "#F8BCBC" : "gray"),
                                backgroundColor: isSubmit &&
                                (correct_answer === choice ? "#94D7A2" : ques && ques.answer === choice ? "#F8BCBC" : ""),
                            }}
                            >{he.decode(choice)}</label>
                        </div>
                    ))}
                </div>

            </div>
            <hr />
        </>
     );
}

export default Question;
