
import './App.css'
import { ChaiCard } from './Components/ChaiCard.tsx'
import { Counter } from './Components/Counter.tsx'
import ChaiList from './Components/ChaiList.tsx'

import type { Chai } from './types.ts'
import OrderForm from './Components/OrderForm.tsx'

const menu:Chai[] = [
  {id:1,name:"Masala",price:30},
  {id:2,name:"ginger",price:45},
  {id:3,name:"lemon",price:45}
]
function App() {
 

  return (
    <>
    <h1>hello react with ts</h1>
    <ChaiCard name = "headphones" price = {5000}/>
    <ChaiCard name = "iphone" price = {900000}/>

    <div>
      <Counter />
    </div>

    <div>
      <ChaiList items={menu}/>
    </div>

    <div>
      <OrderForm onSubmit={(order)=>{
        console.log("placed",order.name,order.cups)
      }}/>
    </div>
    </>
  )
}

export default App
