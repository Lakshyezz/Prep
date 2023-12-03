import { useState } from 'react'
import './App.css'
import Space from './Components/space'
import Parent from './Components/Parent';
import Child from './Components/Child';

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [sum, setSum] = useState(0);
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState('');

  const increament = () =>(setCount(count+1));
  const decreament = () =>(setCount(count-1));

  const users = [
    { name: "John Doe", id: 1 },
    { name: "Jane Doe", id: 2 },
    { name: "Billy Doe", id: 3 }
  ];

  return (

  <div>
    <span>{sum}</span>
    <Space/>
    <input placeholder='a' type='number' onChange={(e)=> setA(Number(e.target.value))}/>
    <input placeholder='b' type='number' onChange={(e)=> setB(Number(e.target.value))}/>
    <button onClick={() => {
      if(a === 0 || b ===0){
        alert('Write Both Values')
      }else{
       return setSum(a+b);
      }
    }}>Add Them</button>
    {/* <Parent>
      <Child/>
      <Space/>
    </Parent> */}
    {/* {users.map((user, count) => 
      <div key={count}>{user.name + "+" + user.id}</div>
    )}
    <Space/>
    <Space/>    
    <span>{count}</span>
    <Space/>
    <Space/>
    <button onClick={increament}>Increament</button>
    <Space/>
    <Space/>
    <button onClick={decreament}>Decreament</button>
    <Space/>
    <Space/>
    {hide? <span hidden>THIS TEXT</span> : <span >THIS TEXT</span>}
    <Space/>
    <button onClick={()=> setHide(!hide)}>Hide Element Above</button>
    <Space/>
    <Space/>
    <p>Append Here .. {value}</p>
    <Space/>
    <input placeholder='text' onChange={(e)=>setValue(e.target.value)}/> */}

  </div>

  )
}

export default App


