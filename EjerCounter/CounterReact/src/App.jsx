import './App.css'
import Counter from './components/Counter';


function App() {

  return (

    <div>

      <Counter initialValue={0} step={2} />

    </div>
  )
}

export default App
