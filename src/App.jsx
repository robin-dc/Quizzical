import { Route, Routes, BrowserRouter } from "react-router-dom"
import FrontPage from "./components/FrontPage"
import Quiz from "./components/Quiz"

function App() {

  return (
    <BrowserRouter>
      <div className='h-full'>
        <Routes>
          <Route index path="/" element={<FrontPage/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
        </Routes>
      </div>
      <img src="/top-blob.png" alt="" className="absolute top-0 right-0 z-[-1]"/>
      <img src="/bottom-blob.png" alt=""  className="absolute bottom-0 left-0 z-[-1]"/>
    </BrowserRouter>
  )
}

export default App
