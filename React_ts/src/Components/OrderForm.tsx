
import React, { useState } from "react"
interface OrderFormProps{
    onSubmit(order:{name:string,cups:number}):void
}

export function OrderForm({onSubmit}:OrderFormProps) {
    const [name,setName] = useState<string>("Masala")
    const[cups,setCups] = useState<number>(1)
    function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,cups})
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>ChaiName</label>
        <input
        value={name}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value)}
         />

         <label>Cups</label>
        <input
        type="number"
        value={name}
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setCups(Number(e.target.value))}
         />
    </form>

    <button type="submit">submit</button>


    </>
  )
}

export default OrderForm