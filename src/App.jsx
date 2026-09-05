import './App.css'
import SideBar from './components/SideBar'
import TypingSession from './components/TypingSession'

function App() {
  return (
    <>
      <div className='main-container'>
        <TypingSession />
      </div>
      <SideBar />
    </>
  )
}

export default App
