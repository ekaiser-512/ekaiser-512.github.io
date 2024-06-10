import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import About from './components/Main/About/About'
import Aside from './components/Aside/Aside'
import Footer from './components/Footer/Footer'

import './App.css'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
            </Routes>
            < Aside />
            < Footer />
        </>
    )
}
export default App;