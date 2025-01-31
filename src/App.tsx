import { BrowserRouter, Route, Routes } from "react-router-dom"
import Root from "./pages/root"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/:id" element={<Root />} />
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
