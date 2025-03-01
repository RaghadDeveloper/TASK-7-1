import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import MainPage from './Layouts/MainPage';
import About from './Layouts/About';
import ContactPage from './Layouts/ContactPage';

function App() {

  return (
    <>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/About' element={<About />}/>
          <Route path='/Contact' element={<ContactPage />} />
          <Route />
        </Routes>
    </>
  )
}

export default App
