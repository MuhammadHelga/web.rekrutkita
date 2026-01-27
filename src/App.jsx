import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import FormPages from "./pages/FormPages";
import ChatInterview from './pages/ChatInterview'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <FormPages/> } />
        <Route path="/wawancara" element={ <ChatInterview/> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
