import './App.css';
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import Form from './components/Form.jsx'
import ToKnow from './components/ToKnow.jsx'
import ToFix from './components/ToFix.jsx'
import ToOrder from './components/ToOrder.jsx'


export default function App() {

  return (
    <div className="App">
      <Navbar />
      {/* <Navbar2 /> */}
      <Footer />
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='/About' element={<About />} />
        <Route path='/TellMe' element={<Form />} />
        <Route path='/Leaderboard' element={null} />
        <Route path='/PrivateMsg' element={null} />
        <Route path='/toOrder' element={<ToOrder />} />
        <Route path='/toFix' element={<ToFix />} />
        <Route path='/toKnow' element={<ToKnow />} />
      </Routes>
    </div>
  );
}