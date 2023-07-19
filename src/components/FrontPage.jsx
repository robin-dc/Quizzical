import { useNavigate } from "react-router-dom";

function FrontPage() {
    const navigate = useNavigate()
    return (
        <div className="container flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-semibold">Quizzical</h1>
            <p className="text-[1.2rem] font-[500]">Where Knowledge Meets Play.</p>
            <button className="text-white bg-button px-2 py-[0.5rem] rounded-[10px] mt-2 active:scale-[0.9] transition duration-200" onClick={() => navigate('/quiz')}>Start Quiz</button>
        </div>
     );
}

export default FrontPage;
