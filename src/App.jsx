
import { Route, Routes } from 'react-router-dom'
import './App.css'
import RootLayouts from './components/layout/RootLayout'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Error from './components/pages/Error'
import Services from './components/pages/Services'
import Contact from './components/layout/Contact'


function App() {
 

  return (
   <>
   <Routes> 
   <Route path='/' element={<RootLayouts />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="servics" element={<Services />} />
     <Route path="contact" element={<Contact />} />
    <Route path="*" element={<Error />} /> 
   </Route>
   </Routes>
   </>
  )
}

export default App
