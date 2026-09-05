import './App.css'
import GenerateKeyboard from './components/GenerateKeyboard'
import SideBar from './components/SideBar'
import Tutor from './components/Tutor'

function App() {
  return (
    <>
      <div className='main-container'>
        <Tutor />
        <GenerateKeyboard />
      </div>
      <SideBar />
    </>
  )
}

export default App
