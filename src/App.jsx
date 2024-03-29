import { Link } from 'react-router-dom'
import './App.css'

function App() {
  

  return (
    <>
      <h1>Main page</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse in dolores vitae provident optio blanditiis eos quis numquam, beatae ratione laborum, necessitatibus et. Inventore placeat qui voluptas, dolorum asperiores neque?</p>
      <Link to='about'>
      <button>Second Page</button>
      </Link>
    </>
  )
}

export default App
