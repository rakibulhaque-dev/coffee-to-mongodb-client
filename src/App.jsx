import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const data = useLoaderData()
  console.log(data)
  return (
    <>
      <h1 className='container p-8 mx-auto mb-8 text-5xl text-center text-purple-700 border rounded-lg'>Tottal data : {data.length}</h1>
      <div className='container grid grid-cols-3 gap-4 mx-auto'>
        {
          data.map(n => <CoffeeCard key={n._id} coffee={n}></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
